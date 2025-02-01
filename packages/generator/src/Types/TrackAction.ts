import type { FindAction } from './FindAction.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'


/**
 * An agent tracks an object for updates.
 * \nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.
 */
export interface TrackAction extends FindAction {

/**
 * A sub property of instrument. The method of delivery.
 */
deliveryMethod?: DeliveryMethod | DeliveryMethod[]

}