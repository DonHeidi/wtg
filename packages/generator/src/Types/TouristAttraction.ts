import type { Place } from './Place.ts'

import type { Text } from './Text.ts'

import type { Audience } from './Audience.ts'

import type { Language } from './Language.ts'


/**
 * A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below)
 */
export interface TouristAttraction extends Place {

/**
 * Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc. 
 */
touristType?: Text | Text[] | Audience | Audience[]

/**
 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
 */
availableLanguage?: Text | Text[] | Language | Language[]

}