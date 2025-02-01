import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * A musical composition.
 */
export interface MusicComposition extends CreativeWork {

/**
 * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
 */
composer?: Person | Person[] | Organization | Organization[]

}