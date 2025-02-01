import type { Person } from './Person.ts'
import type { MedicalAudience } from './MedicalAudience.ts'

import type { MedicalCondition } from './MedicalCondition.ts'

import type { Drug } from './Drug.ts'


/**
 * A patient is any person recipient of health care services.
 */
export interface Patient extends Person, MedicalAudience {

/**
 * One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
 */
diagnosis?: MedicalCondition | MedicalCondition[]

/**
 * Specifying a drug or medicine used in a medication procedure.
 */
drug?: Drug | Drug[]

/**
 * Specifying the health condition(s) of a patient, medical study, or other target audience.
 */
healthCondition?: MedicalCondition | MedicalCondition[]

}