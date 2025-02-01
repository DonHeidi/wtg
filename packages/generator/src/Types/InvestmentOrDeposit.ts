import type { FinancialProduct } from './FinancialProduct.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Number } from './Number.ts'


/**
 * A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
 */
export interface InvestmentOrDeposit extends FinancialProduct {

/**
 * The amount of money.
 */
amount?: MonetaryAmount | MonetaryAmount[] | Number | Number[]

}