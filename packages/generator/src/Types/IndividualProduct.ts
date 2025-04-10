import type { Product } from './Product.ts'

import type { Text } from './Text.ts'


/**
 * A single, identifiable product instance (e.g. a laptop with a particular serial number).
 */
export interface IndividualProduct extends Product {

/**
 * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
 */
serialNumber?: Text | Text[]

}