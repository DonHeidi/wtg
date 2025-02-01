import type { Review } from './Review.ts'

import type { Thing } from './Thing.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'


/**
 * [[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A [[Guide]] may list multiple recommendations for different categories. For example, in a [[Guide]] about which TVs to buy, the author may have several [[Recommendation]]s.
 */
export interface Recommendation extends Review {

/**
 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 */
category?: Thing | Thing[] | PhysicalActivityCategory | PhysicalActivityCategory[] | CategoryCode | CategoryCode[] | Text | Text[] | URL | URL[]

}