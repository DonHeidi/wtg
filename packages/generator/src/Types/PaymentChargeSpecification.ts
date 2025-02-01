import type { PriceSpecification } from './PriceSpecification.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'


/**
 * The costs of settling the payment using a particular payment method.
 */
export interface PaymentChargeSpecification extends PriceSpecification {

/**
 * The delivery method(s) to which the delivery charge or payment charge specification applies.
 */
appliesToDeliveryMethod?: DeliveryMethod | DeliveryMethod[]

}