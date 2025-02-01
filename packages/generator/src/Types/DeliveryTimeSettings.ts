import type { StructuredValue } from './StructuredValue.ts'

import type { DefinedRegion } from './DefinedRegion.ts'

import type { Boolean } from './Boolean.ts'

import type { Text } from './Text.ts'

import type { ShippingDeliveryTime } from './ShippingDeliveryTime.ts'


/**
 * A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]].
 */
export interface DeliveryTimeSettings extends StructuredValue {

/**
 * indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.
 */
shippingDestination?: DefinedRegion | DefinedRegion[]

/**
 * This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings.
 */
isUnlabelledFallback?: Boolean | Boolean[]

/**
 * Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
 */
transitTimeLabel?: Text | Text[]

/**
 * The total delay between the receipt of the order and the goods reaching the final customer.
 */
deliveryTime?: ShippingDeliveryTime | ShippingDeliveryTime[]

}