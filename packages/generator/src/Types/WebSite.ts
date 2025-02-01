import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'


/**
 * A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 */
export interface WebSite extends CreativeWork {

/**
 * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
 */
issn?: Text | Text[]

}