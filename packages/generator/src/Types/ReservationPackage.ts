import type { Reservation } from './Reservation.ts'


/**
 * A group of multiple reservations with common values for all sub-reservations.
 */
export interface ReservationPackage extends Reservation {

}