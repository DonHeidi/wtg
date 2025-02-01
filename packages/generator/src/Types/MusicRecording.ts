import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'

import type { MusicGroup } from './MusicGroup.ts'

import type { Duration } from './Duration.ts'


/**
 * A music recording (track), usually a single song.
 */
export interface MusicRecording extends CreativeWork {

/**
 * The artist that performed this album or recording.
 */
byArtist?: Person | Person[] | MusicGroup | MusicGroup[]

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

}