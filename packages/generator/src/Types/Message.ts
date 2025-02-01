import type { CreativeWork } from './CreativeWork.ts'

import type { Audience } from './Audience.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * A single message from a sender to one or more organizations or people.
 */
export interface Message extends CreativeWork {

/**
 * A sub property of participant. The participant who is at the receiving end of the action.
 */
recipient?: Audience | Audience[] | ContactPoint | ContactPoint[] | Person | Person[] | Organization | Organization[]

/**
 * A sub property of participant. The participant who is at the sending end of the action.
 */
sender?: Organization | Organization[] | Audience | Audience[] | Person | Person[]

}