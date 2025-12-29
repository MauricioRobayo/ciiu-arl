import type { RiskClassification } from "./types";

declare const riskClassification: RiskClassification[];
export { riskClassification };
export type { RiskClassification };

export function getRiskClassification(ciiu: string): RiskClassification[];
