import type { Trip } from './Trip.ts'

import type { Text } from './Text.ts'

import type { Audience } from './Audience.ts'


/**
 * A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
 *   (See examples below.)
 */
export interface TouristTrip extends Trip {

/**
 * Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc. 
 */
touristType?: Text | Text[] | Audience | Audience[]

}