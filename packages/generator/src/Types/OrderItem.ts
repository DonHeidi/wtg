import type { Intangible } from './Intangible.ts'

import type { Service } from './Service.ts'

import type { Product } from './Product.ts'

import type { ParcelDelivery } from './ParcelDelivery.ts'


/**
 * An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 */
export interface OrderItem extends Intangible {

/**
 * The item ordered.
 */
orderedItem?: Service | Service[] | Product | Product[] | OrderItem | OrderItem[]

/**
 * The delivery of the parcel related to this order or order item.
 */
orderDelivery?: ParcelDelivery | ParcelDelivery[]

}