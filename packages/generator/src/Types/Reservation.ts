import type { Intangible } from './Intangible.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { Text } from './Text.ts'

import type { PriceSpecification } from './PriceSpecification.ts'

import type { Number } from './Number.ts'


/**
 * Describes a reservation for travel, dining or an event. Some reservations require tickets. 
 * \nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
 */
export interface Reservation extends Intangible {

/**
 * The person or organization the reservation or ticket is for.
 */
underName?: Person | Person[] | Organization | Organization[]

/**
 * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
 */
broker?: Organization | Organization[] | Person | Person[]

/**
 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
priceCurrency?: Text | Text[]

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 */
provider?: Person | Person[] | Organization | Organization[]

/**
 * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
 * \nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 */
totalPrice?: Text | Text[] | PriceSpecification | PriceSpecification[] | Number | Number[]

}