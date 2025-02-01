import type { Service } from './Service.ts'

import type { Text } from './Text.ts'

import type { BroadcastFrequencySpecification } from './BroadcastFrequencySpecification.ts'

import type { Language } from './Language.ts'


/**
 * A delivery service through which content is provided via broadcast over the air or online.
 */
export interface BroadcastService extends Service {

/**
 * The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequencies of AM and FM radio channels, e.g. "87 FM".
 */
broadcastFrequency?: Text | Text[] | BroadcastFrequencySpecification | BroadcastFrequencySpecification[]

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 */
callSign?: Text | Text[]

/**
 * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
 */
videoFormat?: Text | Text[]

/**
 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 */
inLanguage?: Language | Language[] | Text | Text[]

}