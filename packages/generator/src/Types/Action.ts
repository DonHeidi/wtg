import type { Thing } from './Thing.ts'

import type { DateTime } from './DateTime.ts'

import type { Time } from './Time.ts'

import type { Text } from './Text.ts'

import type { Place } from './Place.ts'

import type { VirtualLocation } from './VirtualLocation.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.
 * \nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html).
 */
export interface Action extends Thing {

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

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 */
provider?: Person | Person[] | Organization | Organization[]

}