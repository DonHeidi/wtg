import type { Intangible } from './Intangible.ts'

import type { Number } from './Number.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
export interface ProgramMembership extends Intangible {

/**
 * The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.)
 */
membershipPointsEarned?: Number | Number[] | QuantitativeValue | QuantitativeValue[]

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 */
member?: Person | Person[] | Organization | Organization[]

/**
 * The Organization (airline, travelers' club, retailer, etc.) the membership is made with or which offers the  MemberProgram.
 */
hostingOrganization?: Organization | Organization[]

/**
 * A member of this organization.
 */
members?: Organization | Organization[] | Person | Person[]

}