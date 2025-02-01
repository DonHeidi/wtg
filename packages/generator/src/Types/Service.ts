import type { Intangible } from './Intangible.ts'

import type { Product } from './Product.ts'

import type { Text } from './Text.ts'

import type { Organization } from './Organization.ts'

import type { Person } from './Person.ts'

import type { OfferCatalog } from './OfferCatalog.ts'

import type { Certification } from './Certification.ts'

import type { URL } from './URL.ts'

import type { ImageObject } from './ImageObject.ts'

import type { Place } from './Place.ts'

import type { GeoShape } from './GeoShape.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { Brand } from './Brand.ts'

import type { Thing } from './Thing.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { OpeningHoursSpecification } from './OpeningHoursSpecification.ts'

import type { Review } from './Review.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'

import type { AggregateRating } from './AggregateRating.ts'

import type { Audience } from './Audience.ts'


/**
 * A service provided by an organization, e.g. delivery service, print services, etc.
 */
export interface Service extends Intangible {

/**
 * A pointer to another, functionally similar product (or multiple products).
 */
isSimilarTo?: Product | Product[] | Service | Service[]

/**
 * An award won by or for this item.
 */
award?: Text | Text[]

/**
 * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
 */
broker?: Organization | Organization[] | Person | Person[]

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 */
hasOfferCatalog?: OfferCatalog | OfferCatalog[]

/**
 * Certification information about a product, organization, service, place, or person.
 */
hasCertification?: Certification | Certification[]

/**
 * An associated logo.
 */
logo?: URL | URL[] | ImageObject | ImageObject[]

/**
 * The geographic area where a service or offered item is provided.
 */
areaServed?: Text | Text[] | Place | Place[] | GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[]

/**
 * The geographic area where the service is provided.
 */
serviceArea?: GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[] | Place | Place[]

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 */
brand?: Organization | Organization[] | Brand | Brand[]

/**
 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 */
category?: Thing | Thing[] | PhysicalActivityCategory | PhysicalActivityCategory[] | CategoryCode | CategoryCode[] | Text | Text[] | URL | URL[]

/**
 * A pointer to another, somehow related product (or multiple products).
 */
isRelatedTo?: Product | Product[] | Service | Service[]

/**
 * The hours during which this service or contact is available.
 */
hoursAvailable?: OpeningHoursSpecification | OpeningHoursSpecification[]

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
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 */
provider?: Person | Person[] | Organization | Organization[]

/**
 * A slogan or motto associated with the item.
 */
slogan?: Text | Text[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

/**
 * An intended audience, i.e. a group for whom something was created.
 */
audience?: Audience | Audience[]

}