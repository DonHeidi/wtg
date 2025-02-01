import type { Service } from './Service.ts'

import type { Text } from './Text.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'


/**
 * A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 */
export interface GovernmentService extends Service {

/**
 * Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
 */
jurisdiction?: Text | Text[] | AdministrativeArea | AdministrativeArea[]

}