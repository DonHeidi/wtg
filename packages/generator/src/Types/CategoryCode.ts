import type { DefinedTerm } from './DefinedTerm.ts'

import type { Text } from './Text.ts'


/**
 * A Category Code.
 */
export interface CategoryCode extends DefinedTerm {

/**
 * A short textual code that uniquely identifies the value.
 */
codeValue?: Text | Text[]

}