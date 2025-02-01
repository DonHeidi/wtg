import type { StructuredValue } from './StructuredValue.ts'

import type { Text } from './Text.ts'

import type { Place } from './Place.ts'

import type { GeoShape } from './GeoShape.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { OpeningHoursSpecification } from './OpeningHoursSpecification.ts'

import type { Language } from './Language.ts'


/**
 * A contact point&#x2014;for example, a Customer Complaints department.
 */
export interface ContactPoint extends StructuredValue {

/**
 * The telephone number.
 */
telephone?: Text | Text[]

/**
 * The fax number.
 */
faxNumber?: Text | Text[]

/**
 * Email address.
 */
email?: Text | Text[]

/**
 * The geographic area where a service or offered item is provided.
 */
areaServed?: Text | Text[] | Place | Place[] | GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[]

/**
 * The geographic area where the service is provided.
 */
serviceArea?: GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[] | Place | Place[]

/**
 * The hours during which this service or contact is available.
 */
hoursAvailable?: OpeningHoursSpecification | OpeningHoursSpecification[]

/**
 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
 */
availableLanguage?: Text | Text[] | Language | Language[]

}