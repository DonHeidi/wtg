import type { MedicalEntity } from './MedicalEntity.ts'

import type { Drug } from './Drug.ts'


/**
 * A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 */
export interface DrugClass extends MedicalEntity {

/**
 * Specifying a drug or medicine used in a medication procedure.
 */
drug?: Drug | Drug[]

}