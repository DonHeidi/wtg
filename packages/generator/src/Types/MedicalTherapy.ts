import type { TherapeuticProcedure } from './TherapeuticProcedure.ts'

import type { Text } from './Text.ts'

import type { MedicalContraindication } from './MedicalContraindication.ts'

import type { MedicalEntity } from './MedicalEntity.ts'


/**
 * Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
 */
export interface MedicalTherapy extends TherapeuticProcedure {

/**
 * A contraindication for this therapy.
 */
contraindication?: Text | Text[] | MedicalContraindication | MedicalContraindication[]

/**
 * A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
 */
seriousAdverseOutcome?: MedicalEntity | MedicalEntity[]

}