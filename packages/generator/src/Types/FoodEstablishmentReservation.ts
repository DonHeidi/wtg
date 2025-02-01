import type { Reservation } from './Reservation.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Integer } from './Integer.ts'

import type { DateTime } from './DateTime.ts'

import type { Time } from './Time.ts'


/**
 * A reservation to dine at a food-related business.
 * \nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export interface FoodEstablishmentReservation extends Reservation {

/**
 * Number of people the reservation should accommodate.
 */
partySize?: QuantitativeValue | QuantitativeValue[] | Integer | Integer[]

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
endTime?: DateTime | DateTime[] | Time | Time[]

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
startTime?: DateTime | DateTime[] | Time | Time[]

}