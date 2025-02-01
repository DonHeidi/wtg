import type { CreativeWork } from './CreativeWork.ts'

import type { Place } from './Place.ts'

import type { Text } from './Text.ts'

import type { GeoShape } from './GeoShape.ts'

import type { URL } from './URL.ts'

import type { DateTime } from './DateTime.ts'

import type { Time } from './Time.ts'

import type { Claim } from './Claim.ts'

import type { Organization } from './Organization.ts'

import type { Distance } from './Distance.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Duration } from './Duration.ts'

import type { Boolean } from './Boolean.ts'

import type { MediaSubscription } from './MediaSubscription.ts'


/**
 * A media object, such as an image, video, audio, or text object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 */
export interface MediaObject extends CreativeWork {

/**
 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
 * \nSee also [[eligibleRegion]].
 *       
 */
ineligibleRegion?: Place | Place[] | Text | Text[] | GeoShape | GeoShape[]

/**
 * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.
 * 
 * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
 * 
 * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
 */
encodingFormat?: URL | URL[] | Text | Text[]

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
endTime?: DateTime | DateTime[] | Time | Time[]

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
 * \nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 */
startTime?: DateTime | DateTime[] | Time | Time[]

/**
 * Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].
 */
interpretedAsClaim?: Claim | Claim[]

/**
 * The production company or studio responsible for the item, e.g. series, video game, episode etc.
 */
productionCompany?: Organization | Organization[]

/**
 * The height of the item.
 */
height?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

/**
 * The width of the item.
 */
width?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
 */
requiresSubscription?: Boolean | Boolean[] | MediaSubscription | MediaSubscription[]

}