import type { StructuredValue } from './StructuredValue.ts'

import type { Text } from './Text.ts'

import type { Number } from './Number.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { MemberProgramTier } from './MemberProgramTier.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'


/**
 * A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.
 */
export interface PriceSpecification extends StructuredValue {

/**
 * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
 * \nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '
} in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
 *       
 */
price?: Text | Text[] | Number | Number[]

/**
 * The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.)
 */
membershipPointsEarned?: Number | Number[] | QuantitativeValue | QuantitativeValue[]

/**
 * The membership program tier an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.
 */
validForMemberTier?: MemberProgramTier | MemberProgramTier[]

/**
 * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
 */
eligibleQuantity?: QuantitativeValue | QuantitativeValue[]

/**
 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 */
validThrough?: DateTime | DateTime[] | Date | Date[]

/**
 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
priceCurrency?: Text | Text[]

/**
 * The date when the item becomes valid.
 */
validFrom?: DateTime | DateTime[] | Date | Date[]

/**
 * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
 */
eligibleTransactionVolume?: PriceSpecification | PriceSpecification[]

}