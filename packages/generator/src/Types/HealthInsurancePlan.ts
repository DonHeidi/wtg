import type { Intangible } from './Intangible.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { Text } from './Text.ts'


/**
 * A US-style health insurance plan, including PPOs, EPOs, and HMOs.
 */
export interface HealthInsurancePlan extends Intangible {

/**
 * A contact point for a person or organization.
 */
contactPoint?: ContactPoint | ContactPoint[]

/**
 * The tier(s) of drugs offered by this formulary or insurance plan.
 */
healthPlanDrugTier?: Text | Text[]

}