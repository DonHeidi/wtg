import type { Clip } from './Clip.ts'

import type { TVSeries } from './TVSeries.ts'


/**
 * A short TV program or a segment/part of a TV program.
 */
export interface TVClip extends Clip {

/**
 * The TV series to which this episode or season belongs.
 */
partOfTVSeries?: TVSeries | TVSeries[]

}