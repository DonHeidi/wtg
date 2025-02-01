import type { LocalBusiness } from './LocalBusiness.ts'

import type { Rating } from './Rating.ts'


/**
 * A food-related business.
 */
export interface FoodEstablishment extends LocalBusiness {

/**
 * An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
 */
starRating?: Rating | Rating[]

}