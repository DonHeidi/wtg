import type { CreativeWork } from './CreativeWork.ts'

import type { MusicRecording } from './MusicRecording.ts'

import type { ItemList } from './ItemList.ts'


/**
 * A collection of music tracks in playlist form.
 */
export interface MusicPlaylist extends CreativeWork {

/**
 * A music recording (track)&#x2014;usually a single song.
 */
tracks?: MusicRecording | MusicRecording[]

/**
 * A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
 */
track?: ItemList | ItemList[] | MusicRecording | MusicRecording[]

}