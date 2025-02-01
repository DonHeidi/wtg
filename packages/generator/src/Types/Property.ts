import type { Intangible } from './Intangible.ts'

import type { Class } from './Class.ts'

import type { Enumeration } from './Enumeration.ts'


/**
 * A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 */
export interface Property extends Intangible {

/**
 * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
 */
supersededBy?: Property | Property[] | Class | Class[] | Enumeration | Enumeration[]

}