import data from "./risk-classification.json" with { type: "json" };
export const riskClassification = data;
export function getRiskClassification(ciiu) {
  const risk = riskClassification.filter((row) => row.ciiu === ciiu);
  if (risk.length > 0) return risk;
  // 7111 - 7112 are not listed and are grouped under 7110
  return riskClassification.filter(
    (row) => row.ciiu == ciiu.slice(0, 3).padEnd(4, "0"),
  );
}
