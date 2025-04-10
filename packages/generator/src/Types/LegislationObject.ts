import type { Legislation } from './Legislation.ts'
import type { MediaObject } from './MediaObject.ts'


/**
 * A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version.
 */
export interface LegislationObject extends Legislation, MediaObject {

}