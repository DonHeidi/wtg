import type { TradeAction } from './TradeAction.ts'

import type { Audience } from './Audience.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * An agent pays a price to a participant.
 */
export interface PayAction extends TradeAction {

/**
 * A sub property of participant. The participant who is at the receiving end of the action.
 */
recipient?: Audience | Audience[] | ContactPoint | ContactPoint[] | Person | Person[] | Organization | Organization[]

}