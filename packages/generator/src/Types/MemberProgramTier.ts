import type { Intangible } from './Intangible.ts'

import type { Number } from './Number.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'


/**
 * A MemberProgramTier specifies a tier under a loyalty (member) program, for example "gold".
 */
export interface MemberProgramTier extends Intangible {

/**
 * The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.)
 */
membershipPointsEarned?: Number | Number[] | QuantitativeValue | QuantitativeValue[]

}