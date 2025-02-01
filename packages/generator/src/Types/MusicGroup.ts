import type { PerformingGroup } from './PerformingGroup.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { MusicRecording } from './MusicRecording.ts'

import type { ItemList } from './ItemList.ts'


/**
 * A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 */
export interface MusicGroup extends PerformingGroup {

/**
 * Genre of the creative work, broadcast channel or group.
 */
genre?: Text | Text[] | URL | URL[]

/**
 * A music recording (track)&#x2014;usually a single song.
 */
tracks?: MusicRecording | MusicRecording[]

/**
 * A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
 */
track?: ItemList | ItemList[] | MusicRecording | MusicRecording[]

}