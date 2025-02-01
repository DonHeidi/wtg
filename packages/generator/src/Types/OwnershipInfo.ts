import type { StructuredValue } from './StructuredValue.ts'

import type { Product } from './Product.ts'

import type { Service } from './Service.ts'


/**
 * A structured value providing information about when a certain organization or person owned a certain product.
 */
export interface OwnershipInfo extends StructuredValue {

/**
 * The product that this structured value is referring to.
 */
typeOfGood?: Product | Product[] | Service | Service[]

}