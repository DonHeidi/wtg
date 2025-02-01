import type { Reservation } from './Reservation.ts'


/**
 * A reservation for train travel.
 * \nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 */
export interface TrainReservation extends Reservation {

}