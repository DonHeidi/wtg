import type { MediaObject } from './MediaObject.ts'

import type { Text } from './Text.ts'


/**
 * An audio file.
 */
export interface AudioObject extends MediaObject {

/**
 * If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
 */
transcript?: Text | Text[]

/**
 * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
 */
caption?: MediaObject | MediaObject[] | Text | Text[]

/**
 * Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'.
 */
embeddedTextCaption?: Text | Text[]

}