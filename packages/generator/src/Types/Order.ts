import type { Intangible } from './Intangible.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { Text } from './Text.ts'

import type { PaymentMethod } from './PaymentMethod.ts'

import type { Date } from './Date.ts'

import type { DateTime } from './DateTime.ts'

import type { Service } from './Service.ts'

import type { Product } from './Product.ts'

import type { OrderItem } from './OrderItem.ts'

import type { ParcelDelivery } from './ParcelDelivery.ts'


/**
 * An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 */
export interface Order extends Intangible {

/**
 * Party placing the order or paying the invoice.
 */
customer?: Person | Person[] | Organization | Organization[]

/**
 * The name of the credit card or other method of payment for the order.
 */
paymentMethod?: Text | Text[] | PaymentMethod | PaymentMethod[]

/**
 * The date that payment is due.
 */
paymentDueDate?: Date | Date[] | DateTime | DateTime[]

/**
 * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
 */
broker?: Organization | Organization[] | Person | Person[]

/**
 * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
 */
paymentMethodId?: Text | Text[]

/**
 * The item ordered.
 */
orderedItem?: Service | Service[] | Product | Product[] | OrderItem | OrderItem[]

/**
 * The date that payment is due.
 */
paymentDue?: DateTime | DateTime[]

/**
 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
 */
seller?: Person | Person[] | Organization | Organization[]

/**
 * The delivery of the parcel related to this order or order item.
 */
orderDelivery?: ParcelDelivery | ParcelDelivery[]

/**
 * A number that confirms the given order or payment has been received.
 */
confirmationNumber?: Text | Text[]

}