import type { Product } from './Product.ts'

import type { ProductGroup } from './ProductGroup.ts'


/**
 * A datasheet or vendor specification of a product (in the sense of a prototypical description).
 */
export interface ProductModel extends Product {

/**
 * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
 */
isVariantOf?: ProductModel | ProductModel[] | ProductGroup | ProductGroup[]

}