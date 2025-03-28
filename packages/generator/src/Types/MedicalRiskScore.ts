import type { MedicalRiskEstimator } from './MedicalRiskEstimator.ts'


/**
 * A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
 */
export interface MedicalRiskScore extends MedicalRiskEstimator {

}