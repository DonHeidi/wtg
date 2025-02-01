import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'


/**
 * A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).
 */
export interface Legislation extends CreativeWork {

/**
 * Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
 */
jurisdiction?: Text | Text[] | AdministrativeArea | AdministrativeArea[]

}