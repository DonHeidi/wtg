import type { StructuredValue } from './StructuredValue.ts'

import type { Text } from './Text.ts'

import type { Country } from './Country.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { Number } from './Number.ts'


/**
 * The geographic coordinates of a place or event.
 */
export interface GeoCoordinates extends StructuredValue {

/**
 * The country. Recommended to be in 2-letter [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1) format, for example "US". For backward compatibility, a 3-letter [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country code such as "SGP" or a full country name such as "Singapore" can also be used.
 */
addressCountry?: Text | Text[] | Country | Country[]

/**
 * Physical address of the item.
 */
address?: Text | Text[] | PostalAddress | PostalAddress[]

/**
 * The postal code. For example, 94043.
 */
postalCode?: Text | Text[]

/**
 * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
 */
latitude?: Text | Text[] | Number | Number[]

/**
 * The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT\_OF\_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
 */
elevation?: Text | Text[] | Number | Number[]

/**
 * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
 */
longitude?: Number | Number[] | Text | Text[]

}