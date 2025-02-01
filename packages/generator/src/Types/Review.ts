import type { CreativeWork } from './CreativeWork.ts'

import type { ItemList } from './ItemList.ts'

import type { WebContent } from './WebContent.ts'

import type { ListItem } from './ListItem.ts'

import type { Text } from './Text.ts'

import type { Thing } from './Thing.ts'


/**
 * A review of an item - for example, of a restaurant, movie, or store.
 */
export interface Review extends CreativeWork {

/**
 * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
 * 
 * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
 * 
 * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
 */
positiveNotes?: ItemList | ItemList[] | WebContent | WebContent[] | ListItem | ListItem[] | Text | Text[]

/**
 * The item that is being reviewed/rated.
 */
itemReviewed?: Thing | Thing[]

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 */
reviewAspect?: Text | Text[]

/**
 * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry 
 * 
 * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions 
 * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
 * 
 * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
 */
negativeNotes?: WebContent | WebContent[] | ItemList | ItemList[] | ListItem | ListItem[] | Text | Text[]

}