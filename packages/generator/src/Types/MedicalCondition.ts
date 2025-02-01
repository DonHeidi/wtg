import type { MedicalEntity } from './MedicalEntity.ts'

import type { Text } from './Text.ts'

import type { MedicalTherapy } from './MedicalTherapy.ts'

import type { Drug } from './Drug.ts'

import type { AnatomicalStructure } from './AnatomicalStructure.ts'

import type { AnatomicalSystem } from './AnatomicalSystem.ts'

import type { SuperficialAnatomy } from './SuperficialAnatomy.ts'

import type { MedicalStudyStatus } from './MedicalStudyStatus.ts'

import type { EventStatusType } from './EventStatusType.ts'


/**
 * Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 */
export interface MedicalCondition extends MedicalEntity {

/**
 * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
 */
pathophysiology?: Text | Text[]

/**
 * A possible treatment to address this condition, sign or symptom.
 */
possibleTreatment?: MedicalTherapy | MedicalTherapy[]

/**
 * Specifying a drug or medicine used in a medication procedure.
 */
drug?: Drug | Drug[]

/**
 * The anatomy of the underlying organ system or structures associated with this entity.
 */
associatedAnatomy?: AnatomicalStructure | AnatomicalStructure[] | AnatomicalSystem | AnatomicalSystem[] | SuperficialAnatomy | SuperficialAnatomy[]

/**
 * The status of the study (enumerated).
 */
status?: MedicalStudyStatus | MedicalStudyStatus[] | Text | Text[] | EventStatusType | EventStatusType[]

/**
 * The characteristics of associated patients, such as age, gender, race etc.
 */
epidemiology?: Text | Text[]

}