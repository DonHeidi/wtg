import type { Intangible } from './Intangible.ts'

import type { Text } from './Text.ts'

import type { BroadcastFrequencySpecification } from './BroadcastFrequencySpecification.ts'

import type { URL } from './URL.ts'


/**
 * A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 */
export interface BroadcastChannel extends Intangible {

/**
 * The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequencies of AM and FM radio channels, e.g. "87 FM".
 */
broadcastFrequency?: Text | Text[] | BroadcastFrequencySpecification | BroadcastFrequencySpecification[]

/**
 * Genre of the creative work, broadcast channel or group.
 */
genre?: Text | Text[] | URL | URL[]

}