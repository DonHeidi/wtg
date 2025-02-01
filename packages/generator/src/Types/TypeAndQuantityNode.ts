import type { StructuredValue } from './StructuredValue.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { Product } from './Product.ts'

import type { Service } from './Service.ts'

import type { BusinessFunction } from './BusinessFunction.ts'


/**
 * A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
 */
export interface TypeAndQuantityNode extends StructuredValue {

/**
 * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
 */
unitCode?: Text | Text[] | URL | URL[]

/**
 * The product that this structured value is referring to.
 */
typeOfGood?: Product | Product[] | Service | Service[]

/**
 * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
 */
businessFunction?: BusinessFunction | BusinessFunction[]

/**
 * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
 * <a href='unitCode'>unitCode</a>.
 */
unitText?: Text | Text[]

}