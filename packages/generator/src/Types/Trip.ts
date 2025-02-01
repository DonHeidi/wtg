import type { Intangible } from './Intangible.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * A trip or journey. An itinerary of visits to one or more places.
 */
export interface Trip extends Intangible {

/**
 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 *       
 */
offers?: Offer | Offer[] | Demand | Demand[]

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 */
provider?: Person | Person[] | Organization | Organization[]

}