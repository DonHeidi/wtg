import type { Intangible } from './Intangible.ts'

import type { Organization } from './Organization.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'

import type { Person } from './Person.ts'


/**
 * The delivery of a parcel either via the postal service or a commercial service.
 */
export interface ParcelDelivery extends Intangible {

/**
 * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
 */
carrier?: Organization | Organization[]

/**
 * Method used for delivery or shipping.
 */
hasDeliveryMethod?: DeliveryMethod | DeliveryMethod[]

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 */
provider?: Person | Person[] | Organization | Organization[]

}