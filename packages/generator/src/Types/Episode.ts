import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { VideoObject } from './VideoObject.ts'

import type { CreativeWorkSeason } from './CreativeWorkSeason.ts'

import type { Organization } from './Organization.ts'

import type { Duration } from './Duration.ts'

import type { CreativeWorkSeries } from './CreativeWorkSeries.ts'

import type { MusicGroup } from './MusicGroup.ts'


/**
 * A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 */
export interface Episode extends CreativeWork {

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

/**
 * The trailer of a movie or TV/radio series, season, episode, etc.
 */
trailer?: VideoObject | VideoObject[]

/**
 * The season to which this episode belongs.
 */
partOfSeason?: CreativeWorkSeason | CreativeWorkSeason[]

/**
 * An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
 */
actors?: Person | Person[]

/**
 * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 */
directors?: Person | Person[]

/**
 * The production company or studio responsible for the item, e.g. series, video game, episode etc.
 */
productionCompany?: Organization | Organization[]

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

/**
 * The series to which this episode or season belongs.
 */
partOfSeries?: CreativeWorkSeries | CreativeWorkSeries[]

/**
 * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 */
director?: Person | Person[]

/**
 * The composer of the soundtrack.
 */
musicBy?: Person | Person[] | MusicGroup | MusicGroup[]

}