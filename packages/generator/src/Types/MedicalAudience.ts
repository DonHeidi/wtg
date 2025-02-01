import type { PeopleAudience } from './PeopleAudience.ts'
import type { Audience } from './Audience.ts'


/**
 * Target audiences for medical web pages.
 */
export interface MedicalAudience extends PeopleAudience, Audience {

}