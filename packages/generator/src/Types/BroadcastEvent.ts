import type { PublicationEvent } from './PublicationEvent.ts'

import type { Text } from './Text.ts'

import type { Language } from './Language.ts'


/**
 * An over the air or online broadcast event.
 */
export interface BroadcastEvent extends PublicationEvent {

/**
 * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
 */
videoFormat?: Text | Text[]

/**
 * Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
 */
subtitleLanguage?: Text | Text[] | Language | Language[]

}