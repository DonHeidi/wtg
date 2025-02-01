import type { Intangible } from './Intangible.ts'

import type { Organization } from './Organization.ts'


/**
 * A MemberProgram defines a loyalty (or membership) program that provides its members with certain benefits, for example better pricing, free shipping or returns, or the ability to earn loyalty points. Member programs may have multiple tiers, for example silver and gold members, each with different benefits.
 */
export interface MemberProgram extends Intangible {

/**
 * The Organization (airline, travelers' club, retailer, etc.) the membership is made with or which offers the  MemberProgram.
 */
hostingOrganization?: Organization | Organization[]

}