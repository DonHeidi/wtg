import type { Intangible } from './Intangible.ts'

import type { Organization } from './Organization.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { Duration } from './Duration.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'


/**
 * A permit issued by an organization, e.g. a parking pass.
 */
export interface Permit extends Intangible {

/**
 * The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].
 */
issuedBy?: Organization | Organization[]

/**
 * The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. 
 */
validIn?: AdministrativeArea | AdministrativeArea[]

/**
 * The duration of validity of a permit or similar thing.
 */
validFor?: Duration | Duration[]

/**
 * The date when the item becomes valid.
 */
validFrom?: DateTime | DateTime[] | Date | Date[]

}