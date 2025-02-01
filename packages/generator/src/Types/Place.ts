import type { Thing } from './Thing.ts'

import type { PropertyValue } from './PropertyValue.ts'

import type { Text } from './Text.ts'

import type { GeospatialGeometry } from './GeospatialGeometry.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { Certification } from './Certification.ts'

import type { Event } from './Event.ts'

import type { Number } from './Number.ts'

import type { URL } from './URL.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { Boolean } from './Boolean.ts'

import type { ImageObject } from './ImageObject.ts'

import type { Review } from './Review.ts'

import type { LocationFeatureSpecification } from './LocationFeatureSpecification.ts'

import type { AggregateRating } from './AggregateRating.ts'

import type { Integer } from './Integer.ts'


/**
 * Entities that have a somewhat fixed, physical extension.
 */
export interface Place extends Thing {

/**
 * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
 * \nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
 * 
 */
additionalProperty?: PropertyValue | PropertyValue[]

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 */
isicV4?: Text | Text[]

/**
 * The telephone number.
 */
telephone?: Text | Text[]

/**
 * Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship).
 */
geoEquals?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * Physical address of the item.
 */
address?: Text | Text[] | PostalAddress | PostalAddress[]

/**
 * Certification information about a product, organization, service, place, or person.
 */
hasCertification?: Certification | Certification[]

/**
 * Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 */
geoWithin?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * The fax number.
 */
faxNumber?: Text | Text[]

/**
 * Upcoming or past event associated with this place, organization, or action.
 */
event?: Event | Event[]

/**
 * Upcoming or past events associated with this place or organization.
 */
events?: Event | Event[]

/**
 * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
 */
latitude?: Text | Text[] | Number | Number[]

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 */
keywords?: URL | URL[] | DefinedTerm | DefinedTerm[] | Text | Text[]

/**
 * A flag to signal that the item, event, or place is accessible for free.
 */
isAccessibleForFree?: Boolean | Boolean[]

/**
 * An associated logo.
 */
logo?: URL | URL[] | ImageObject | ImageObject[]

/**
 * Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 */
geoCovers?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
 */
longitude?: Number | Number[] | Text | Text[]

/**
 * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 */
geoCrosses?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 */
geoOverlaps?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 */
hasGS1DigitalLink?: URL | URL[]

/**
 * Review of the item.
 */
reviews?: Review | Review[]

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 */
globalLocationNumber?: Text | Text[]

/**
 * Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: "they have no point in common. They form a set of disconnected geometries." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)
 */
geoDisjoint?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * A review of the item.
 */
review?: Review | Review[]

/**
 * Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 */
geoContains?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * Represents spatial relations in which two geometries (or the places they represent) touch: "they have at least one boundary point in common, but no interior points." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)
 */
geoTouches?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * A slogan or motto associated with the item.
 */
slogan?: Text | Text[]

/**
 * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
 */
amenityFeature?: LocationFeatureSpecification | LocationFeatureSpecification[]

/**
 * Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 */
geoIntersects?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
 */
tourBookingPage?: URL | URL[]

/**
 * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 */
geoCoveredBy?: Place | Place[] | GeospatialGeometry | GeospatialGeometry[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

/**
 * The total number of individuals that may attend an event or venue.
 */
maximumAttendeeCapacity?: Integer | Integer[]

}