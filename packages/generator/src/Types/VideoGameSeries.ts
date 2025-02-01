import type { CreativeWorkSeries } from './CreativeWorkSeries.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { Thing } from './Thing.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { VideoObject } from './VideoObject.ts'

import type { CreativeWorkSeason } from './CreativeWorkSeason.ts'

import type { Integer } from './Integer.ts'

import type { Episode } from './Episode.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { Place } from './Place.ts'

import type { Organization } from './Organization.ts'

import type { GamePlayMode } from './GamePlayMode.ts'

import type { MusicGroup } from './MusicGroup.ts'


/**
 * A video game series.
 */
export interface VideoGameSeries extends CreativeWorkSeries {

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
 * A season that is part of the media series.
 */
containsSeason?: CreativeWorkSeason | CreativeWorkSeason[]

/**
 * The number of seasons in this series.
 */
numberOfSeasons?: Integer | Integer[]

/**
 * The task that a player-controlled character, or group of characters may complete in order to gain a reward.
 */
quest?: Thing | Thing[]

/**
 * An episode of a TV, radio or game media within a series or season.
 */
episode?: Episode | Episode[]

/**
 * Indicate how many people can play this game (minimum, maximum, or range).
 */
numberOfPlayers?: QuantitativeValue | QuantitativeValue[]

/**
 * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 */
directors?: Person | Person[]

/**
 * Cheat codes to the game.
 */
cheatCode?: CreativeWork | CreativeWork[]

/**
 * A season in a media series.
 */
seasons?: CreativeWorkSeason | CreativeWorkSeason[]

/**
 * An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
 */
gameItem?: Thing | Thing[]

/**
 * Real or fictional location of the game (or part of game).
 */
gameLocation?: URL | URL[] | PostalAddress | PostalAddress[] | Place | Place[]

/**
 * A season in a media series.
 */
season?: URL | URL[] | CreativeWorkSeason | CreativeWorkSeason[]

/**
 * The production company or studio responsible for the item, e.g. series, video game, episode etc.
 */
productionCompany?: Organization | Organization[]

/**
 * A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
 */
characterAttribute?: Thing | Thing[]

/**
 * Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
 */
playMode?: GamePlayMode | GamePlayMode[]

/**
 * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 */
director?: Person | Person[]

/**
 * The number of episodes in this season or series.
 */
numberOfEpisodes?: Integer | Integer[]

/**
 * The composer of the soundtrack.
 */
musicBy?: Person | Person[] | MusicGroup | MusicGroup[]

/**
 * An episode of a TV/radio series or season.
 */
episodes?: Episode | Episode[]

}