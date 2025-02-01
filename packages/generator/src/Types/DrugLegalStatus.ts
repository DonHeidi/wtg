import type { MedicalIntangible } from './MedicalIntangible.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'


/**
 * The legal availability status of a medical drug.
 */
export interface DrugLegalStatus extends MedicalIntangible {

/**
 * The location in which the status applies.
 */
applicableLocation?: AdministrativeArea | AdministrativeArea[]

}