import type { BioChemEntity } from './BioChemEntity.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer etc., identifiable as a separately distinguishable entity.
 */
export interface MolecularEntity extends BioChemEntity {

/**
 * Intended use of the BioChemEntity by humans.
 */
potentialUse?: DefinedTerm | DefinedTerm[]

/**
 * A role played by the BioChemEntity within a chemical context.
 */
chemicalRole?: DefinedTerm | DefinedTerm[]

}