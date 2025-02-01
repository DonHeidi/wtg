import type { CreativeWorkSeries } from './CreativeWorkSeries.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { VideoObject } from './VideoObject.ts'

import type { CreativeWorkSeason } from './CreativeWorkSeason.ts'

import type { Integer } from './Integer.ts'

import type { Episode } from './Episode.ts'

import type { URL } from './URL.ts'

import type { Organization } from './Organization.ts'

import type { MusicGroup } from './MusicGroup.ts'


/**
 * CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 */
export interface RadioSeries extends CreativeWorkSeries {

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

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
 * An episode of a TV, radio or game media within a series or season.
 */
episode?: Episode | Episode[]

/**
 * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 */
directors?: Person | Person[]

/**
 * A season in a media series.
 */
seasons?: CreativeWorkSeason | CreativeWorkSeason[]

/**
 * A season in a media series.
 */
season?: URL | URL[] | CreativeWorkSeason | CreativeWorkSeason[]

/**
 * The production company or studio responsible for the item, e.g. series, video game, episode etc.
 */
productionCompany?: Organization | Organization[]

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