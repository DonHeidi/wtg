import type { Intangible } from './Intangible.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { Text } from './Text.ts'


/**
 * A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 */
export interface Rating extends Intangible {

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 */
author?: Person | Person[] | Organization | Organization[]

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 */
reviewAspect?: Text | Text[]

}