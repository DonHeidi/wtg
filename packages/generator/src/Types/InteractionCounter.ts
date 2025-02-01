import type { StructuredValue } from './StructuredValue.ts'

import type { DateTime } from './DateTime.ts'

import type { Time } from './Time.ts'

import type { Text } from './Text.ts'

import type { Place } from './Place.ts'

import type { VirtualLocation } from './VirtualLocation.ts'

import type { PostalAddress } from './PostalAddress.ts'


/**
 * A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 */
export interface InteractionCounter extends StructuredValue {

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
endTime?: DateTime | DateTime[] | Time | Time[]

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 */
location?: Text | Text[] | Place | Place[] | VirtualLocation | VirtualLocation[] | PostalAddress | PostalAddress[]

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
startTime?: DateTime | DateTime[] | Time | Time[]

}