import type { Organization } from './Organization.ts'

import type { BoardingPolicyType } from './BoardingPolicyType.ts'

import type { Text } from './Text.ts'


/**
 * An organization that provides flights for passengers.
 */
export interface Airline extends Organization {

/**
 * The type of boarding policy used by the airline (e.g. zone-based or group-based).
 */
boardingPolicy?: BoardingPolicyType | BoardingPolicyType[]

/**
 * IATA identifier for an airline or airport.
 */
iataCode?: Text | Text[]

}