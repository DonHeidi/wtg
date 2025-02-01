import type { SportsOrganization } from './SportsOrganization.ts'

import type { GenderType } from './GenderType.ts'

import type { Text } from './Text.ts'


/**
 * Organization: Sports team.
 */
export interface SportsTeam extends SportsOrganization {

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 */
gender?: GenderType | GenderType[] | Text | Text[]

}