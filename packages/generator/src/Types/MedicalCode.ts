import type { CategoryCode } from './CategoryCode.ts'
import type { MedicalIntangible } from './MedicalIntangible.ts'

import type { Text } from './Text.ts'


/**
 * A code for a medical entity.
 */
export interface MedicalCode extends CategoryCode, MedicalIntangible {

/**
 * A short textual code that uniquely identifies the value.
 */
codeValue?: Text | Text[]

}