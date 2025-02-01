import type { Game } from './Game.ts'
import type { SoftwareApplication } from './SoftwareApplication.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { Thing } from './Thing.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { VideoObject } from './VideoObject.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { GamePlayMode } from './GamePlayMode.ts'

import type { MusicGroup } from './MusicGroup.ts'


/**
 * A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 */
export interface VideoGame extends Game, SoftwareApplication {

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

/**
 * The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
 */
gamePlatform?: Thing | Thing[] | Text | Text[] | URL | URL[]

/**
 * The trailer of a movie or TV/radio series, season, episode, etc.
 */
trailer?: VideoObject | VideoObject[]

/**
 * An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
 */
actors?: Person | Person[]

/**
 * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 */
directors?: Person | Person[]

/**
 * Cheat codes to the game.
 */
cheatCode?: CreativeWork | CreativeWork[]

/**
 * Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
 */
playMode?: GamePlayMode | GamePlayMode[]

/**
 * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 */
director?: Person | Person[]

/**
 * The composer of the soundtrack.
 */
musicBy?: Person | Person[] | MusicGroup | MusicGroup[]

}