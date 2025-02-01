import type { MedicalIntangible } from './MedicalIntangible.ts'

import type { MaximumDoseSchedule } from './MaximumDoseSchedule.ts'

import type { Text } from './Text.ts'


/**
 * A specific strength in which a medical drug is available in a specific country.
 */
export interface DrugStrength extends MedicalIntangible {

/**
 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
 */
maximumIntake?: MaximumDoseSchedule | MaximumDoseSchedule[]

/**
 * An active ingredient, typically chemical compounds and/or biologic substances.
 */
activeIngredient?: Text | Text[]

}