import type { CivicStructure } from './CivicStructure.ts'

import type { Text } from './Text.ts'


/**
 * An airport.
 */
export interface Airport extends CivicStructure {

/**
 * IATA identifier for an airline or airport.
 */
iataCode?: Text | Text[]

}