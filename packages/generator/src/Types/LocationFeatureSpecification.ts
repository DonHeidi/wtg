import type { PropertyValue } from './PropertyValue.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { OpeningHoursSpecification } from './OpeningHoursSpecification.ts'


/**
 * Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 */
export interface LocationFeatureSpecification extends PropertyValue {

/**
 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 */
validThrough?: DateTime | DateTime[] | Date | Date[]

/**
 * The hours during which this service or contact is available.
 */
hoursAvailable?: OpeningHoursSpecification | OpeningHoursSpecification[]

/**
 * The date when the item becomes valid.
 */
validFrom?: DateTime | DateTime[] | Date | Date[]

}