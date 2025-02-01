import type { Intangible } from './Intangible.ts'

import type { Date } from './Date.ts'

import type { Time } from './Time.ts'

import type { DateTime } from './DateTime.ts'

import type { Place } from './Place.ts'

import type { Text } from './Text.ts'

import type { GeoShape } from './GeoShape.ts'

import type { Offer } from './Offer.ts'

import type { Thing } from './Thing.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { URL } from './URL.ts'

import type { Boolean } from './Boolean.ts'

import type { MediaSubscription } from './MediaSubscription.ts'


/**
 * A set of requirements that must be fulfilled in order to perform an Action.
 */
export interface ActionAccessSpecification extends Intangible {

/**
 * The beginning of the availability of the product or service included in the offer.
 */
availabilityStarts?: Date | Date[] | Time | Time[] | DateTime | DateTime[]

/**
 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
 * \nSee also [[eligibleRegion]].
 *       
 */
ineligibleRegion?: Place | Place[] | Text | Text[] | GeoShape | GeoShape[]

/**
 * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
 */
expectsAcceptanceOf?: Offer | Offer[]

/**
 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 */
category?: Thing | Thing[] | PhysicalActivityCategory | PhysicalActivityCategory[] | CategoryCode | CategoryCode[] | Text | Text[] | URL | URL[]

/**
 * Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
 */
requiresSubscription?: Boolean | Boolean[] | MediaSubscription | MediaSubscription[]

/**
 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
 * \nSee also [[ineligibleRegion]].
 *     
 */
eligibleRegion?: GeoShape | GeoShape[] | Text | Text[] | Place | Place[]

/**
 * The end of the availability of the product or service included in the offer.
 */
availabilityEnds?: DateTime | DateTime[] | Time | Time[] | Date | Date[]

}