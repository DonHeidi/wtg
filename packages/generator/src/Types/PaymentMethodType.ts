import type { Enumeration } from './Enumeration.ts'


/**
 * The type of payment method, only for generic payment types, specific forms of payments, like card payment should be expressed using subclasses of PaymentMethod.
 */
export interface PaymentMethodType extends Enumeration {

}