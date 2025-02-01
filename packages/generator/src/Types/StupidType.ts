import type { Thing } from './Thing.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'


/**
 * A StupidType for testing.
 */
export interface StupidType extends Thing {

/**
 * This is a StupidProperty! - for testing only.
 */
stupidProperty?: QuantitativeValue | QuantitativeValue[]

}