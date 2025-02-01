import type { Intangible } from './Intangible.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { Thing } from './Thing.ts'


/**
 * A single item within a larger data feed.
 */
export interface DataFeedItem extends Intangible {

/**
 * The date on which the CreativeWork was created or the item was added to a DataFeed.
 */
dateCreated?: DateTime | DateTime[] | Date | Date[]

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 */
item?: Thing | Thing[]

/**
 * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
 */
dateModified?: Date | Date[] | DateTime | DateTime[]

}