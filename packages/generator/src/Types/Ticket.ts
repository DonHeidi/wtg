import type { Intangible } from './Intangible.ts'

import type { Organization } from './Organization.ts'

import type { Person } from './Person.ts'

import type { Text } from './Text.ts'

import type { PriceSpecification } from './PriceSpecification.ts'

import type { Number } from './Number.ts'


/**
 * Used to describe a ticket to an event, a flight, a bus ride, etc.
 */
export interface Ticket extends Intangible {

/**
 * The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].
 */
issuedBy?: Organization | Organization[]

/**
 * The person or organization the reservation or ticket is for.
 */
underName?: Person | Person[] | Organization | Organization[]

/**
 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
priceCurrency?: Text | Text[]

/**
 * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
 * \nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 */
totalPrice?: Text | Text[] | PriceSpecification | PriceSpecification[] | Number | Number[]

}