import type { StructuredValue } from './StructuredValue.ts'

import type { DayOfWeek } from './DayOfWeek.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'


/**
 * A structured value providing information about the opening hours of a place or a certain service inside a place.
 * \n
 * The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.
 *       
 */
export interface OpeningHoursSpecification extends StructuredValue {

/**
 * The day of the week for which these opening hours are valid.
 */
dayOfWeek?: DayOfWeek | DayOfWeek[]

/**
 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 */
validThrough?: DateTime | DateTime[] | Date | Date[]

/**
 * The date when the item becomes valid.
 */
validFrom?: DateTime | DateTime[] | Date | Date[]

}