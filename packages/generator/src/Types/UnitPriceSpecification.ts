import type { PriceSpecification } from './PriceSpecification.ts'

import type { PriceTypeEnumeration } from './PriceTypeEnumeration.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'


/**
 * The price asked for a given offer by the respective organization or person.
 */
export interface UnitPriceSpecification extends PriceSpecification {

/**
 * Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.
 */
priceType?: PriceTypeEnumeration | PriceTypeEnumeration[] | Text | Text[]

/**
 * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
 */
unitCode?: Text | Text[] | URL | URL[]

/**
 * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
 * <a href='unitCode'>unitCode</a>.
 */
unitText?: Text | Text[]

}