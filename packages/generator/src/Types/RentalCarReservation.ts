import type { Reservation } from './Reservation.ts'

import type { DateTime } from './DateTime.ts'

import type { Place } from './Place.ts'


/**
 * A reservation for a rental car.
 * \nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export interface RentalCarReservation extends Reservation {

/**
 * When a taxi will pick up a passenger or a rental car can be picked up.
 */
pickupTime?: DateTime | DateTime[]

/**
 * Where a taxi will pick up a passenger or a rental car can be picked up.
 */
pickupLocation?: Place | Place[]

}