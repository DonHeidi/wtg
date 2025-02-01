import type { MusicPlaylist } from './MusicPlaylist.ts'

import type { Duration } from './Duration.ts'


/**
 * A MusicRelease is a specific release of a music album.
 */
export interface MusicRelease extends MusicPlaylist {

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

}