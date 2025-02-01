import type { MedicalEntity } from './MedicalEntity.ts'

import type { Text } from './Text.ts'

import type { MedicalContraindication } from './MedicalContraindication.ts'


/**
 * Any object used in a medical capacity, such as to diagnose or treat a patient.
 */
export interface MedicalDevice extends MedicalEntity {

/**
 * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead.
 */
adverseOutcome?: MedicalEntity | MedicalEntity[]

/**
 * A contraindication for this therapy.
 */
contraindication?: Text | Text[] | MedicalContraindication | MedicalContraindication[]

/**
 * A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
 */
seriousAdverseOutcome?: MedicalEntity | MedicalEntity[]

}