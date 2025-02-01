import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'

import type { Integer } from './Integer.ts'


/**
 * A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.
 * \nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 */
export interface PublicationIssue extends CreativeWork {

/**
 * Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
 */
pagination?: Text | Text[]

/**
 * The page on which the work starts; for example "135" or "xiii".
 */
pageStart?: Text | Text[] | Integer | Integer[]

/**
 * The page on which the work ends; for example "138" or "xvi".
 */
pageEnd?: Integer | Integer[] | Text | Text[]

}