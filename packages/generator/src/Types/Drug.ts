import type { Substance } from './Substance.ts'
import type { Product } from './Product.ts'

import type { DoseSchedule } from './DoseSchedule.ts'

import type { DrugLegalStatus } from './DrugLegalStatus.ts'

import type { MedicalEnumeration } from './MedicalEnumeration.ts'

import type { Text } from './Text.ts'

import type { Boolean } from './Boolean.ts'

import type { MaximumDoseSchedule } from './MaximumDoseSchedule.ts'


/**
 * A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge makes a clear difference between them.
 */
export interface Drug extends Substance, Product {

/**
 * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
 */
doseSchedule?: DoseSchedule | DoseSchedule[]

/**
 * The drug or supplement's legal status, including any controlled substance schedules that apply.
 */
legalStatus?: DrugLegalStatus | DrugLegalStatus[] | MedicalEnumeration | MedicalEnumeration[] | Text | Text[]

/**
 * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
 */
mechanismOfAction?: Text | Text[]

/**
 * True if this item's name is a proprietary/brand name (vs. generic name).
 */
isProprietary?: Boolean | Boolean[]

/**
 * Proprietary name given to the diet plan, typically by its originator or creator.
 */
proprietaryName?: Text | Text[]

/**
 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
 */
maximumIntake?: MaximumDoseSchedule | MaximumDoseSchedule[]

/**
 * The generic name of this drug or supplement.
 */
nonProprietaryName?: Text | Text[]

/**
 * The unit in which the drug is measured, e.g. '5 mg tablet'.
 */
drugUnit?: Text | Text[]

/**
 * An active ingredient, typically chemical compounds and/or biologic substances.
 */
activeIngredient?: Text | Text[]

}