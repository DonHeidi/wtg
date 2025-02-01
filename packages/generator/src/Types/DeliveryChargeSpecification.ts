import type { PriceSpecification } from './PriceSpecification.ts'

import type { Place } from './Place.ts'

import type { Text } from './Text.ts'

import type { GeoShape } from './GeoShape.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'


/**
 * The price for the delivery of an offer using a particular delivery method.
 */
export interface DeliveryChargeSpecification extends PriceSpecification {

/**
 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
 * \nSee also [[eligibleRegion]].
 *       
 */
ineligibleRegion?: Place | Place[] | Text | Text[] | GeoShape | GeoShape[]

/**
 * The geographic area where a service or offered item is provided.
 */
areaServed?: Text | Text[] | Place | Place[] | GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[]

/**
 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
 * \nSee also [[ineligibleRegion]].
 *     
 */
eligibleRegion?: GeoShape | GeoShape[] | Text | Text[] | Place | Place[]

/**
 * The delivery method(s) to which the delivery charge or payment charge specification applies.
 */
appliesToDeliveryMethod?: DeliveryMethod | DeliveryMethod[]

}