import type { BioChemEntity } from './BioChemEntity.ts'

import type { Text } from './Text.ts'


/**
 * A discrete unit of inheritance which affects one or more biological traits (Source: [https://en.wikipedia.org/wiki/Gene](https://en.wikipedia.org/wiki/Gene)). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype).
 */
export interface Gene extends BioChemEntity {

/**
 * A symbolic representation of a BioChemEntity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.
 */
hasBioPolymerSequence?: Text | Text[]

}