import type { LocalBusiness } from './LocalBusiness.ts'

import type { Text } from './Text.ts'

import type { Boolean } from './Boolean.ts'

import type { Rating } from './Rating.ts'

import type { Time } from './Time.ts'

import type { DateTime } from './DateTime.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Number } from './Number.ts'

import type { LocationFeatureSpecification } from './LocationFeatureSpecification.ts'

import type { Language } from './Language.ts'

import type { Audience } from './Audience.ts'


/**
 * A lodging business, such as a motel, hotel, or inn.
 */
export interface LodgingBusiness extends LocalBusiness {

/**
 * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
 */
petsAllowed?: Text | Text[] | Boolean | Boolean[]

/**
 * An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
 */
starRating?: Rating | Rating[]

/**
 * The latest someone may check out of a lodging establishment.
 */
checkoutTime?: Time | Time[] | DateTime | DateTime[]

/**
 * The earliest someone may check into a lodging establishment.
 */
checkinTime?: DateTime | DateTime[] | Time | Time[]

/**
 * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
 * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
 */
numberOfRooms?: QuantitativeValue | QuantitativeValue[] | Number | Number[]

/**
 * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
 */
amenityFeature?: LocationFeatureSpecification | LocationFeatureSpecification[]

/**
 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
 */
availableLanguage?: Text | Text[] | Language | Language[]

/**
 * An intended audience, i.e. a group for whom something was created.
 */
audience?: Audience | Audience[]

}