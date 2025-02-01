import type { Reservation } from './Reservation.ts'

import type { Time } from './Time.ts'

import type { DateTime } from './DateTime.ts'


/**
 * A reservation for lodging at a hotel, motel, inn, etc.
 * \nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export interface LodgingReservation extends Reservation {

/**
 * The latest someone may check out of a lodging establishment.
 */
checkoutTime?: Time | Time[] | DateTime | DateTime[]

/**
 * The earliest someone may check into a lodging establishment.
 */
checkinTime?: DateTime | DateTime[] | Time | Time[]

}