import type { MediaObject } from './MediaObject.ts'

import type { Text } from './Text.ts'


/**
 * An image file.
 */
export interface ImageObject extends MediaObject {

/**
 * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
 */
caption?: MediaObject | MediaObject[] | Text | Text[]

/**
 * Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'.
 */
embeddedTextCaption?: Text | Text[]

}