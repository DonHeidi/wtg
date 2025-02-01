import type { Thing } from './Thing.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * A set of organisms asserted to represent a natural cohesive biological unit.
 */
export interface Taxon extends Thing {

/**
 * A Defined Term contained in this term set.
 */
hasDefinedTerm?: DefinedTerm | DefinedTerm[]

}