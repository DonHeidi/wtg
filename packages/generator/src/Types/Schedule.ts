import type { Intangible } from './Intangible.ts'

import type { DateTime } from './DateTime.ts'

import type { Time } from './Time.ts'

import type { Date } from './Date.ts'

import type { Duration } from './Duration.ts'


/**
 * A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurrences of the event. Additional information can be provided to specify the schedule more precisely.
 *       This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also
 *       have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
 */
export interface Schedule extends Intangible {

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
endTime?: DateTime | DateTime[] | Time | Time[]

/**
 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
startDate?: DateTime | DateTime[] | Date | Date[]

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
startTime?: DateTime | DateTime[] | Time | Time[]

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

/**
 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
endDate?: Date | Date[] | DateTime | DateTime[]

}