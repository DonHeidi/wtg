import type { Thing } from './Thing.ts'

import type { Grant } from './Grant.ts'


/**
 * Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical.
 */
export interface BioChemEntity extends Thing {

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 */
funding?: Grant | Grant[]

}