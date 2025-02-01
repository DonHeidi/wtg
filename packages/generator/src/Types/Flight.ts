import type { Trip } from './Trip.ts'

import type { BoardingPolicyType } from './BoardingPolicyType.ts'

import type { Organization } from './Organization.ts'

import type { Person } from './Person.ts'


/**
 * An airline flight.
 */
export interface Flight extends Trip {

/**
 * The type of boarding policy used by the airline (e.g. zone-based or group-based).
 */
boardingPolicy?: BoardingPolicyType | BoardingPolicyType[]

/**
 * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
 */
carrier?: Organization | Organization[]

/**
 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
 */
seller?: Person | Person[] | Organization | Organization[]

}