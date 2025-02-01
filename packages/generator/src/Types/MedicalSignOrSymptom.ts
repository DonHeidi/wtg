import type { MedicalCondition } from './MedicalCondition.ts'

import type { MedicalTherapy } from './MedicalTherapy.ts'


/**
 * Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
 */
export interface MedicalSignOrSymptom extends MedicalCondition {

/**
 * A possible treatment to address this condition, sign or symptom.
 */
possibleTreatment?: MedicalTherapy | MedicalTherapy[]

}