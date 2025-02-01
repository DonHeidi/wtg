import type { Intangible } from './Intangible.ts'

import type { Property } from './Property.ts'

import type { Enumeration } from './Enumeration.ts'


/**
 * A class, also often called a 'Type'; equivalent to rdfs:Class.
 */
export interface Class extends Intangible {

/**
 * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
 */
supersededBy?: Property | Property[] | Class | Class[] | Enumeration | Enumeration[]

}