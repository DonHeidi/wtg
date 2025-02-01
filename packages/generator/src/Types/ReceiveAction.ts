import type { TransferAction } from './TransferAction.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'

import type { Organization } from './Organization.ts'

import type { Audience } from './Audience.ts'

import type { Person } from './Person.ts'


/**
 * The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.
 * \nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transferred (e.g. I can receive a package, but it does not mean the package is now mine).
 */
export interface ReceiveAction extends TransferAction {

/**
 * A sub property of instrument. The method of delivery.
 */
deliveryMethod?: DeliveryMethod | DeliveryMethod[]

/**
 * A sub property of participant. The participant who is at the sending end of the action.
 */
sender?: Organization | Organization[] | Audience | Audience[] | Person | Person[]

}