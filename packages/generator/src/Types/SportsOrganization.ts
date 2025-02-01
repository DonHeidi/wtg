import type { Organization } from './Organization.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'


/**
 * Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 */
export interface SportsOrganization extends Organization {

/**
 * A type of sport (e.g. Baseball).
 */
sport?: Text | Text[] | URL | URL[]

}