import type { StructuredValue } from './StructuredValue.ts'

import type { Duration } from './Duration.ts'


/**
 * A statistical distribution of values.
 */
export interface QuantitativeValueDistribution extends StructuredValue {

/**
 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
duration?: Duration | Duration[]

}