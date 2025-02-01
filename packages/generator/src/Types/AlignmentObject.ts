import type { Intangible } from './Intangible.ts'


/**
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 * 
 * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 */
export interface AlignmentObject extends Intangible {

}