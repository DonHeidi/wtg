import type { StructuredValue } from './StructuredValue.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { MemberProgramTier } from './MemberProgramTier.ts'

import type { DefinedRegion } from './DefinedRegion.ts'

import type { Text } from './Text.ts'

import type { ShippingDeliveryTime } from './ShippingDeliveryTime.ts'

import type { Distance } from './Distance.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Boolean } from './Boolean.ts'


/**
 * OfferShippingDetails represents information about shipping destinations.
 * 
 * Multiple of these entities can be used to represent different shipping rates for different destinations:
 * 
 * One entity for Alaska/Hawaii. A different one for continental US. A different one for all France.
 * 
 * Multiple of these entities can be used to represent different shipping costs and delivery times.
 * 
 * Two entities that are identical but differ in rate and time:
 * 
 * E.g. Cheaper and slower: $5 in 5-7 days
 * or Fast and expensive: $15 in 1-2 days.
 */
export interface OfferShippingDetails extends StructuredValue {

/**
 * The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.
 */
shippingRate?: MonetaryAmount | MonetaryAmount[]

/**
 * The membership program tier an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.
 */
validForMemberTier?: MemberProgramTier | MemberProgramTier[]

/**
 * indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.
 */
shippingDestination?: DefinedRegion | DefinedRegion[]

/**
 * Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
 */
transitTimeLabel?: Text | Text[]

/**
 * The total delay between the receipt of the order and the goods reaching the final customer.
 */
deliveryTime?: ShippingDeliveryTime | ShippingDeliveryTime[]

/**
 * The height of the item.
 */
height?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * The width of the item.
 */
width?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * The weight of the product or person.
 */
weight?: QuantitativeValue | QuantitativeValue[]

/**
 * The depth of the item.
 */
depth?: QuantitativeValue | QuantitativeValue[] | Distance | Distance[]

/**
 * Indicates when shipping to a particular [[shippingDestination]] is not available.
 */
doesNotShip?: Boolean | Boolean[]

/**
 * Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
 */
shippingLabel?: Text | Text[]

}