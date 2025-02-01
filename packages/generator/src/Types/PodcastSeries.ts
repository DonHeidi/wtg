import type { CreativeWorkSeries } from './CreativeWorkSeries.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { URL } from './URL.ts'

import type { DataFeed } from './DataFeed.ts'


/**
 * A podcast is an episodic series of digital audio or video files which a user can download and listen to.
 */
export interface PodcastSeries extends CreativeWorkSeries {

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

/**
 * The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom.
 */
webFeed?: URL | URL[] | DataFeed | DataFeed[]

}