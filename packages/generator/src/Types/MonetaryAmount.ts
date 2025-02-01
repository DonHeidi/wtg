import type { StructuredValue } from './StructuredValue.ts'

import type { Number } from './Number.ts'

import type { Text } from './Text.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { Boolean } from './Boolean.ts'


/**
 * A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc.
 */
export interface MonetaryAmount extends StructuredValue {

/**
 * The lower value of some characteristic or property.
 */
minValue?: Number | Number[]

/**
 * The upper value of some characteristic or property.
 */
maxValue?: Number | Number[]

/**
 * The currency in which the monetary amount is expressed.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
currency?: Text | Text[]

/**
 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 */
validThrough?: DateTime | DateTime[] | Date | Date[]

/**
 * The value of a [[QuantitativeValue]] (including [[Observation]]) or property value node.
 * \n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 */
value?: Boolean | Boolean[] | Text | Text[] | Number | Number[] | StructuredValue | StructuredValue[]

/**
 * The date when the item becomes valid.
 */
validFrom?: DateTime | DateTime[] | Date | Date[]

}