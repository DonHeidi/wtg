import type { House } from './House.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Number } from './Number.ts'


/**
 * Residence type: Single-family home.
 */
export interface SingleFamilyResidence extends House {

/**
 * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
 * Typical unit code(s): C62 for person.
 */
occupancy?: QuantitativeValue | QuantitativeValue[]

/**
 * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
 * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
 */
numberOfRooms?: QuantitativeValue | QuantitativeValue[] | Number | Number[]

}