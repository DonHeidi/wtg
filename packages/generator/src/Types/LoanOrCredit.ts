import type { FinancialProduct } from './FinancialProduct.ts'

import type { Text } from './Text.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Number } from './Number.ts'


/**
 * A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
 */
export interface LoanOrCredit extends FinancialProduct {

/**
 * The currency in which the monetary amount is expressed.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
currency?: Text | Text[]

/**
 * The amount of money.
 */
amount?: MonetaryAmount | MonetaryAmount[] | Number | Number[]

}