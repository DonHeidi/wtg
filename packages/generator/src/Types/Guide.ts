import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'


/**
 * [[Guide]] is a page or article that recommends specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking.
 */
export interface Guide extends CreativeWork {

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 */
reviewAspect?: Text | Text[]

}