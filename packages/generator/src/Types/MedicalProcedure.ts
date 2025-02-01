import type { MedicalEntity } from './MedicalEntity.ts'

import type { MedicalStudyStatus } from './MedicalStudyStatus.ts'

import type { Text } from './Text.ts'

import type { EventStatusType } from './EventStatusType.ts'


/**
 * A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
 */
export interface MedicalProcedure extends MedicalEntity {

/**
 * The status of the study (enumerated).
 */
status?: MedicalStudyStatus | MedicalStudyStatus[] | Text | Text[] | EventStatusType | EventStatusType[]

/**
 * Location in the body of the anatomical structure.
 */
bodyLocation?: Text | Text[]

}