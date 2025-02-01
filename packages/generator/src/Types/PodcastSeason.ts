import type { CreativeWorkSeason } from './CreativeWorkSeason.ts'


/**
 * A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used.
 */
export interface PodcastSeason extends CreativeWorkSeason {

}