import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'


/**
 * A [blog](https://en.wikipedia.org/wiki/Blog), sometimes known as a "weblog". Note that the individual posts ([[BlogPosting]]s) in a [[Blog]] are often colloquially referred to by the same term.
 */
export interface Blog extends CreativeWork {

/**
 * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
 */
issn?: Text | Text[]

}