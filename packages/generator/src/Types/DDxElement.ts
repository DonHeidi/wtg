import type { MedicalIntangible } from './MedicalIntangible.ts'

import type { MedicalCondition } from './MedicalCondition.ts'


/**
 * An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 */
export interface DDxElement extends MedicalIntangible {

/**
 * One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
 */
diagnosis?: MedicalCondition | MedicalCondition[]

}