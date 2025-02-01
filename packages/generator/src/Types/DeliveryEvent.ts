import type { Event } from './Event.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'


/**
 * An event involving the delivery of an item.
 */
export interface DeliveryEvent extends Event {

/**
 * Method used for delivery or shipping.
 */
hasDeliveryMethod?: DeliveryMethod | DeliveryMethod[]

}