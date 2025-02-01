import type { Product } from './Product.ts'
import type { Collection } from './Collection.ts'

import type { TypeAndQuantityNode } from './TypeAndQuantityNode.ts'


/**
 * A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]].
 */
export interface ProductCollection extends Product, Collection {

/**
 * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
 */
includesObject?: TypeAndQuantityNode | TypeAndQuantityNode[]

}