import type { StructuredValue } from './StructuredValue.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { DefinedRegion } from './DefinedRegion.ts'

import type { Boolean } from './Boolean.ts'

import type { Text } from './Text.ts'


/**
 * A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]].
 */
export interface ShippingRateSettings extends StructuredValue {

/**
 * The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.
 */
shippingRate?: MonetaryAmount | MonetaryAmount[]

/**
 * indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.
 */
shippingDestination?: DefinedRegion | DefinedRegion[]

/**
 * This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings.
 */
isUnlabelledFallback?: Boolean | Boolean[]

/**
 * Indicates when shipping to a particular [[shippingDestination]] is not available.
 */
doesNotShip?: Boolean | Boolean[]

/**
 * Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
 */
shippingLabel?: Text | Text[]

}