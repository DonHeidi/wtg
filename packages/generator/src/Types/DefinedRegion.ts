import type { StructuredValue } from './StructuredValue.ts'

import type { Text } from './Text.ts'

import type { Country } from './Country.ts'


/**
 * A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.
 * 
 * Examples: a delivery destination when shopping. Region where regional pricing is configured.
 * 
 * Requirement 1:
 * Country: US
 * States: "NY", "CA"
 * 
 * Requirement 2:
 * Country: US
 * PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]}
 * { [12345, 12345], [78945, 78945], }
 * Region = state, canton, prefecture, autonomous community...
 * 
 */
export interface DefinedRegion extends StructuredValue {

/**
 * The country. Recommended to be in 2-letter [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1) format, for example "US". For backward compatibility, a 3-letter [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country code such as "SGP" or a full country name such as "Singapore" can also be used.
 */
addressCountry?: Text | Text[] | Country | Country[]

/**
 * The postal code. For example, 94043.
 */
postalCode?: Text | Text[]

/**
 * The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country).
 */
addressRegion?: Text | Text[]

}