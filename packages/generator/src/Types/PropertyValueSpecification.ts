import type { Intangible } from './Intangible.ts'

import type { Number } from './Number.ts'


/**
 * A Property value specification.
 */
export interface PropertyValueSpecification extends Intangible {

/**
 * The lower value of some characteristic or property.
 */
minValue?: Number | Number[]

/**
 * The upper value of some characteristic or property.
 */
maxValue?: Number | Number[]

}