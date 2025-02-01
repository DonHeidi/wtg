import type { Rating } from './Rating.ts'

import type { Thing } from './Thing.ts'


/**
 * The average rating based on multiple ratings or reviews.
 */
export interface AggregateRating extends Rating {

/**
 * The item that is being reviewed/rated.
 */
itemReviewed?: Thing | Thing[]

}