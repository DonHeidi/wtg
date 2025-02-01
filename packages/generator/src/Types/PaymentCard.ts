import type { FinancialProduct } from './FinancialProduct.ts'
import type { PaymentMethod } from './PaymentMethod.ts'


/**
 * A payment method using a credit, debit, store or other card to associate the payment with an account.
 */
export interface PaymentCard extends FinancialProduct, PaymentMethod {

}