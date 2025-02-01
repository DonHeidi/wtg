import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'

import type { Integer } from './Integer.ts'

import type { URL } from './URL.ts'

import type { SpeakableSpecification } from './SpeakableSpecification.ts'


/**
 * An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.
 * \nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 */
export interface Article extends CreativeWork {

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

/**
 * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
 * 
 * The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
 * 
 * 1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.
 * 
 * 2.) CSS Selectors - addresses content in the annotated page, e.g. via class attribute. Use the [[cssSelector]] property.
 * 
 * 3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.
 * 
 * 
 * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
 * we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
 *          
 */
speakable?: URL | URL[] | SpeakableSpecification | SpeakableSpecification[]

}