import type { WebPage } from './WebPage.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Duration } from './Duration.ts'


/**
 * A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
 *   The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
 *   
 */
export interface RealEstateListing extends WebPage {

/**
 * Publication date of an online listing.
 */
datePosted?: DateTime | DateTime[] | Date | Date[]

/**
 * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
 */
leaseLength?: QuantitativeValue | QuantitativeValue[] | Duration | Duration[]

}