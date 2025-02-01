import type { MedicalEntity } from './MedicalEntity.ts'

import type { MedicalTherapy } from './MedicalTherapy.ts'

import type { MedicalCondition } from './MedicalCondition.ts'

import type { Text } from './Text.ts'


/**
 * An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can include circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
 */
export interface AnatomicalSystem extends MedicalEntity {

/**
 * A medical therapy related to this anatomy.
 */
relatedTherapy?: MedicalTherapy | MedicalTherapy[]

/**
 * A medical condition associated with this anatomy.
 */
relatedCondition?: MedicalCondition | MedicalCondition[]

/**
 * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
 */
associatedPathophysiology?: Text | Text[]

}