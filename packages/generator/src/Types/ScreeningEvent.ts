import type { Event } from './Event.ts'

import type { Text } from './Text.ts'

import type { Language } from './Language.ts'


/**
 * A screening of a movie or other video.
 */
export interface ScreeningEvent extends Event {

/**
 * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
 */
videoFormat?: Text | Text[]

/**
 * Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
 */
subtitleLanguage?: Text | Text[] | Language | Language[]

}