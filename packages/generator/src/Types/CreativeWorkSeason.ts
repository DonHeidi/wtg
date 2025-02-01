import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { VideoObject } from './VideoObject.ts'

import type { Episode } from './Episode.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { Organization } from './Organization.ts'

import type { CreativeWorkSeries } from './CreativeWorkSeries.ts'

import type { Integer } from './Integer.ts'


/**
 * A media season, e.g. TV, radio, video game etc.
 */
export interface CreativeWorkSeason extends CreativeWork {

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

/**
 * The trailer of a movie or TV/radio series, season, episode, etc.
 */
trailer?: VideoObject | VideoObject[]

/**
 * An episode of a TV, radio or game media within a series or season.
 */
episode?: Episode | Episode[]

/**
 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
startDate?: DateTime | DateTime[] | Date | Date[]

/**
 * The production company or studio responsible for the item, e.g. series, video game, episode etc.
 */
productionCompany?: Organization | Organization[]

/**
 * The series to which this episode or season belongs.
 */
partOfSeries?: CreativeWorkSeries | CreativeWorkSeries[]

/**
 * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 */
director?: Person | Person[]

/**
 * The number of episodes in this season or series.
 */
numberOfEpisodes?: Integer | Integer[]

/**
 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
endDate?: Date | Date[] | DateTime | DateTime[]

/**
 * An episode of a TV/radio series or season.
 */
episodes?: Episode | Episode[]

}