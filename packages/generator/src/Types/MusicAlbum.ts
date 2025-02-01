import type { MusicPlaylist } from './MusicPlaylist.ts'

import type { Person } from './Person.ts'

import type { MusicGroup } from './MusicGroup.ts'


/**
 * A collection of music tracks.
 */
export interface MusicAlbum extends MusicPlaylist {

/**
 * The artist that performed this album or recording.
 */
byArtist?: Person | Person[] | MusicGroup | MusicGroup[]

}