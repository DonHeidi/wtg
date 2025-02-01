import type { MedicalEntity } from './MedicalEntity.ts'

import type { MedicalTherapy } from './MedicalTherapy.ts'

import type { MedicalCondition } from './MedicalCondition.ts'

import type { Text } from './Text.ts'


/**
 * Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 */
export interface AnatomicalStructure extends MedicalEntity {

/**
 * A medical therapy related to this anatomy.
 */
relatedTherapy?: MedicalTherapy | MedicalTherapy[]

/**
 * A medical condition associated with this anatomy.
 */
relatedCondition?: MedicalCondition | MedicalCondition[]

/**
 * Location in the body of the anatomical structure.
 */
bodyLocation?: Text | Text[]

/**
 * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
 */
associatedPathophysiology?: Text | Text[]

}