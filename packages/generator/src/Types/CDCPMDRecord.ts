import type { StructuredValue } from './StructuredValue.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'


/**
 * A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
 *       used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
 *       definitions used as the source here.
 *       
 */
export interface CDCPMDRecord extends StructuredValue {

/**
 * Publication date of an online listing.
 */
datePosted?: DateTime | DateTime[] | Date | Date[]

}