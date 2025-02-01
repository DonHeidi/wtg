import type { Intangible } from './Intangible.ts'

import type { Property } from './Property.ts'

import type { Class } from './Class.ts'


/**
 * Lists or enumerations—for example, a list of cuisines or music genres, etc.
 */
export interface Enumeration extends Intangible {

/**
 * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
 */
supersededBy?: Property | Property[] | Class | Class[] | Enumeration | Enumeration[]

}