import type { MedicalIntangible } from './MedicalIntangible.ts'

import type { Text } from './Text.ts'


/**
 * A specific dosing schedule for a drug or supplement.
 */
export interface DoseSchedule extends MedicalIntangible {

/**
 * Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
 */
targetPopulation?: Text | Text[]

}