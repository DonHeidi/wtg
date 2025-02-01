import type { Reservation } from './Reservation.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Integer } from './Integer.ts'

import type { DateTime } from './DateTime.ts'

import type { Place } from './Place.ts'


/**
 * A reservation for a taxi.
 * \nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 */
export interface TaxiReservation extends Reservation {

/**
 * Number of people the reservation should accommodate.
 */
partySize?: QuantitativeValue | QuantitativeValue[] | Integer | Integer[]

/**
 * When a taxi will pick up a passenger or a rental car can be picked up.
 */
pickupTime?: DateTime | DateTime[]

/**
 * Where a taxi will pick up a passenger or a rental car can be picked up.
 */
pickupLocation?: Place | Place[]

}