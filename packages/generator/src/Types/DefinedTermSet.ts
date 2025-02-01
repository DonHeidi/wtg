import type { CreativeWork } from './CreativeWork.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * A set of defined terms, for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
 */
export interface DefinedTermSet extends CreativeWork {

/**
 * A Defined Term contained in this term set.
 */
hasDefinedTerm?: DefinedTerm | DefinedTerm[]

}