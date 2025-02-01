import type { TransferAction } from './TransferAction.ts'

import type { Text } from './Text.ts'

import type { Number } from './Number.ts'

import type { Audience } from './Audience.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { PriceSpecification } from './PriceSpecification.ts'


/**
 * The act of providing goods, services, or money without compensation, often for philanthropic reasons.
 */
export interface DonateAction extends TransferAction {

/**
 * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
 * \nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '
} in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
 *       
 */
price?: Text | Text[] | Number | Number[]

/**
 * A sub property of participant. The participant who is at the receiving end of the action.
 */
recipient?: Audience | Audience[] | ContactPoint | ContactPoint[] | Person | Person[] | Organization | Organization[]

/**
 * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
 */
priceSpecification?: PriceSpecification | PriceSpecification[]

/**
 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
priceCurrency?: Text | Text[]

}