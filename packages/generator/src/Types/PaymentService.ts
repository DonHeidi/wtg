import type { FinancialProduct } from './FinancialProduct.ts'
import type { PaymentMethod } from './PaymentMethod.ts'


/**
 * A Service to transfer funds from a person or organization to a beneficiary person or organization.
 */
export interface PaymentService extends FinancialProduct, PaymentMethod {

}