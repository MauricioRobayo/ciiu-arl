import * as cheerio from "cheerio";
import * as fs from "fs/promises";
import type { RiskClassification } from "./types";

async function scrapeRiskTable(): Promise<RiskClassification[]> {
  const url = "https://safetya.co/normatividad/decreto-768-de-2022/";
  const cssSelector = "#miarticulo table";

  console.log(`Fetching ${url}...`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  console.log("Extracting table data...");

  const table = $(cssSelector);

  if (table.length === 0) {
    throw new Error(`Table not found with selector: ${cssSelector}`);
  }

  const risks = new Map<string, RiskClassification>();

  $(table[1])
    .find("tr")
    .each((index, row) => {
      if (index === 0) return;
      const cells: string[] = [];
      $(row)
        .find("td, th")
        .each((_, cell) => {
          cells.push($(cell).text().trim());
        });
      if (cells.length > 0) {
        const risk: RiskClassification = {
          risk: cells.at(0) ?? "",
          ciiu: cells.at(1) ?? "",
          code: cells.at(2) ?? "",
          description: cells.at(3) ?? "",
        };
        risks.set(`${risk.risk}${risk.ciiu}${risk.code}`, risk);
      }
    });

  const result = Array.from(risks.values()).toSorted((a, b) =>
    a.ciiu.localeCompare(b.ciiu),
  );

  if (result.length === 0) {
    throw new Error("No rows found in table");
  }

  return result;
}

async function main() {
  try {
    console.log("Starting table scraping...");
    console.log("-".repeat(50));

    const data = await scrapeRiskTable();

    console.log(`\nSuccessfully scraped ${data.length} rows`);

    await fs.writeFile(
      "risk-classification.json",
      JSON.stringify(data, null, 2),
      "utf-8",
    );

    console.log("\nDone!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
