import type { Intangible } from './Intangible.ts'

import type { URL } from './URL.ts'

import type { ImageObject } from './ImageObject.ts'

import type { Review } from './Review.ts'

import type { Text } from './Text.ts'

import type { AggregateRating } from './AggregateRating.ts'


/**
 * A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 */
export interface Brand extends Intangible {

/**
 * An associated logo.
 */
logo?: URL | URL[] | ImageObject | ImageObject[]

/**
 * A review of the item.
 */
review?: Review | Review[]

/**
 * A slogan or motto associated with the item.
 */
slogan?: Text | Text[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

}