import type { Substance } from './Substance.ts'
import type { Product } from './Product.ts'

import type { DrugLegalStatus } from './DrugLegalStatus.ts'

import type { MedicalEnumeration } from './MedicalEnumeration.ts'

import type { Text } from './Text.ts'

import type { Boolean } from './Boolean.ts'

import type { MaximumDoseSchedule } from './MaximumDoseSchedule.ts'


/**
 * A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites.
 */
export interface DietarySupplement extends Substance, Product {

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
 * Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
 */
targetPopulation?: Text | Text[]

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
 * An active ingredient, typically chemical compounds and/or biologic substances.
 */
activeIngredient?: Text | Text[]

}