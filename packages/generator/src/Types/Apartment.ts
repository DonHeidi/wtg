import type { Accommodation } from './Accommodation.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Number } from './Number.ts'


/**
 * An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).
 */
export interface Apartment extends Accommodation {

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