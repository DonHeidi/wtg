import type { StructuredValue } from './StructuredValue.ts'

import type { Text } from './Text.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Number } from './Number.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'


/**
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]], use of that type is recommended.
 */
export interface DatedMoneySpecification extends StructuredValue {

/**
 * The currency in which the monetary amount is expressed.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
currency?: Text | Text[]

/**
 * The amount of money.
 */
amount?: MonetaryAmount | MonetaryAmount[] | Number | Number[]

/**
 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
startDate?: DateTime | DateTime[] | Date | Date[]

/**
 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
endDate?: Date | Date[] | DateTime | DateTime[]

}