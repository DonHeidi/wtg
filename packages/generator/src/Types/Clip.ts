import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { CreativeWorkSeason } from './CreativeWorkSeason.ts'

import type { CreativeWorkSeries } from './CreativeWorkSeries.ts'

import type { HyperTocEntry } from './HyperTocEntry.ts'

import type { Number } from './Number.ts'

import type { MusicGroup } from './MusicGroup.ts'


/**
 * A short TV or radio program or a segment/part of a program.
 */
export interface Clip extends CreativeWork {

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

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
 * The series to which this episode or season belongs.
 */
partOfSeries?: CreativeWorkSeries | CreativeWorkSeries[]

/**
 * The start time of the clip expressed as the number of seconds from the beginning of the work.
 */
startOffset?: HyperTocEntry | HyperTocEntry[] | Number | Number[]

/**
 * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 */
director?: Person | Person[]

/**
 * The composer of the soundtrack.
 */
musicBy?: Person | Person[] | MusicGroup | MusicGroup[]

}