import type { TransferAction } from './TransferAction.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'

import type { Audience } from './Audience.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination. Related actions:
 * \n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 */
export interface SendAction extends TransferAction {

/**
 * A sub property of instrument. The method of delivery.
 */
deliveryMethod?: DeliveryMethod | DeliveryMethod[]

/**
 * A sub property of participant. The participant who is at the receiving end of the action.
 */
recipient?: Audience | Audience[] | ContactPoint | ContactPoint[] | Person | Person[] | Organization | Organization[]

}