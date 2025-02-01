import type { Audience } from './Audience.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'


/**
 * A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 */
export interface BusinessAudience extends Audience {

/**
 * The number of employees in an organization, e.g. business.
 */
numberOfEmployees?: QuantitativeValue | QuantitativeValue[]

}