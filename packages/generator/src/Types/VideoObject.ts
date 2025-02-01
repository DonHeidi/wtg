import type { MediaObject } from './MediaObject.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { Text } from './Text.ts'

import type { MusicGroup } from './MusicGroup.ts'


/**
 * A video file.
 */
export interface VideoObject extends MediaObject {

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

/**
 * An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
 */
actors?: Person | Person[]

/**
 * If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
 */
transcript?: Text | Text[]

/**
 * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 */
directors?: Person | Person[]

/**
 * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 */
director?: Person | Person[]

/**
 * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
 */
caption?: MediaObject | MediaObject[] | Text | Text[]

/**
 * The composer of the soundtrack.
 */
musicBy?: Person | Person[] | MusicGroup | MusicGroup[]

/**
 * Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'.
 */
embeddedTextCaption?: Text | Text[]

}