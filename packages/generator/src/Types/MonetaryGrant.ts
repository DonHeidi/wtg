import type { Grant } from './Grant.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Number } from './Number.ts'


/**
 * A monetary grant.
 */
export interface MonetaryGrant extends Grant {

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 */
funder?: Person | Person[] | Organization | Organization[]

/**
 * The amount of money.
 */
amount?: MonetaryAmount | MonetaryAmount[] | Number | Number[]

}