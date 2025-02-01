import type { Thing } from './Thing.ts'

import type { Organization } from './Organization.ts'

import type { Person } from './Person.ts'

import type { PerformingGroup } from './PerformingGroup.ts'

import type { Grant } from './Grant.ts'

import type { URL } from './URL.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { Text } from './Text.ts'

import type { Boolean } from './Boolean.ts'

import type { Place } from './Place.ts'

import type { VirtualLocation } from './VirtualLocation.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { Review } from './Review.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'

import type { Duration } from './Duration.ts'

import type { AggregateRating } from './AggregateRating.ts'

import type { Language } from './Language.ts'

import type { Integer } from './Integer.ts'

import type { Audience } from './Audience.ts'


/**
 * An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.
 */
export interface Event extends Thing {

/**
 * A secondary contributor to the CreativeWork or Event.
 */
contributor?: Organization | Organization[] | Person | Person[]

/**
 * An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 */
actor?: Person | Person[] | PerformingGroup | PerformingGroup[]

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 */
funding?: Grant | Grant[]

/**
 * The subject matter of the content.
 */
about?: Thing | Thing[]

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 */
funder?: Person | Person[] | Organization | Organization[]

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 */
keywords?: URL | URL[] | DefinedTerm | DefinedTerm[] | Text | Text[]

/**
 * A flag to signal that the item, event, or place is accessible for free.
 */
isAccessibleForFree?: Boolean | Boolean[]

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 */
location?: Text | Text[] | Place | Place[] | VirtualLocation | VirtualLocation[] | PostalAddress | PostalAddress[]

/**
 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
startDate?: DateTime | DateTime[] | Date | Date[]

/**
 * The typical expected age range, e.g. '7-9', '11-'.
 */
typicalAgeRange?: Text | Text[]

/**
 * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
 */
translator?: Person | Person[] | Organization | Organization[]

/**
 * A review of the item.
 */
review?: Review | Review[]

/**
 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 *       
 */
offers?: Offer | Offer[] | Demand | Demand[]

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

/**
 * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 */
director?: Person | Person[]

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 */
sponsor?: Person | Person[] | Organization | Organization[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

/**
 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 */
inLanguage?: Language | Language[] | Text | Text[]

/**
 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
endDate?: Date | Date[] | DateTime | DateTime[]

/**
 * The total number of individuals that may attend an event or venue.
 */
maximumAttendeeCapacity?: Integer | Integer[]

/**
 * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
 */
composer?: Person | Person[] | Organization | Organization[]

/**
 * An intended audience, i.e. a group for whom something was created.
 */
audience?: Audience | Audience[]

}