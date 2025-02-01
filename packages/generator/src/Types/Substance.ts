import type { MedicalEntity } from './MedicalEntity.ts'

import type { MaximumDoseSchedule } from './MaximumDoseSchedule.ts'

import type { Text } from './Text.ts'


/**
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 */
export interface Substance extends MedicalEntity {

/**
 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
 */
maximumIntake?: MaximumDoseSchedule | MaximumDoseSchedule[]

/**
 * An active ingredient, typically chemical compounds and/or biologic substances.
 */
activeIngredient?: Text | Text[]

}