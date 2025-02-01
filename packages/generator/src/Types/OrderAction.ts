import type { TradeAction } from './TradeAction.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'


/**
 * An agent orders an object/product/service to be delivered/sent.
 */
export interface OrderAction extends TradeAction {

/**
 * A sub property of instrument. The method of delivery.
 */
deliveryMethod?: DeliveryMethod | DeliveryMethod[]

}