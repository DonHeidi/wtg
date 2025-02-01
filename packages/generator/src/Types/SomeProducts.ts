import type { Product } from './Product.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'


/**
 * A placeholder for multiple similar products of the same kind.
 */
export interface SomeProducts extends Product {

/**
 * The current approximate inventory level for the item or items.
 */
inventoryLevel?: QuantitativeValue | QuantitativeValue[]

}