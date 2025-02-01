import type { BioChemEntity } from './BioChemEntity.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or of different types' (source: [ChEBI:59999](https://www.ebi.ac.uk/chebi/searchId.do?chebiId=59999)).
 */
export interface ChemicalSubstance extends BioChemEntity {

/**
 * Intended use of the BioChemEntity by humans.
 */
potentialUse?: DefinedTerm | DefinedTerm[]

/**
 * A role played by the BioChemEntity within a chemical context.
 */
chemicalRole?: DefinedTerm | DefinedTerm[]

}