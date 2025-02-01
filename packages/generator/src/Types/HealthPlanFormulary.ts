import type { Intangible } from './Intangible.ts'

import type { Boolean } from './Boolean.ts'

import type { Text } from './Text.ts'


/**
 * For a given health insurance plan, the specification for costs and coverage of prescription drugs.
 */
export interface HealthPlanFormulary extends Intangible {

/**
 * The costs to the patient for services under this network or formulary.
 */
healthPlanCostSharing?: Boolean | Boolean[]

/**
 * The tier(s) of drugs offered by this formulary or insurance plan.
 */
healthPlanDrugTier?: Text | Text[]

}