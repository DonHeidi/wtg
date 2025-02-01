import type { Intangible } from './Intangible.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { Text } from './Text.ts'

import type { PaymentMethod } from './PaymentMethod.ts'

import type { Date } from './Date.ts'

import type { DateTime } from './DateTime.ts'

import type { Thing } from './Thing.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { URL } from './URL.ts'


/**
 * A statement of the money due for goods or services; a bill.
 */
export interface Invoice extends Intangible {

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
 * The date that payment is due.
 */
paymentDue?: DateTime | DateTime[]

/**
 * A number that confirms the given order or payment has been received.
 */
confirmationNumber?: Text | Text[]

/**
 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 */
category?: Thing | Thing[] | PhysicalActivityCategory | PhysicalActivityCategory[] | CategoryCode | CategoryCode[] | Text | Text[] | URL | URL[]

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 */
provider?: Person | Person[] | Organization | Organization[]

}