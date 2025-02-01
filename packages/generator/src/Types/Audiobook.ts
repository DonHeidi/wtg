import type { AudioObject } from './AudioObject.ts'
import type { Book } from './Book.ts'

import type { Duration } from './Duration.ts'


/**
 * An audiobook.
 */
export interface Audiobook extends AudioObject, Book {

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

}