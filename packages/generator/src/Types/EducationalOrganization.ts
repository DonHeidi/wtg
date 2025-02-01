import type { CivicStructure } from './CivicStructure.ts'
import type { Organization } from './Organization.ts'

import type { Person } from './Person.ts'


/**
 * An educational organization.
 */
export interface EducationalOrganization extends CivicStructure, Organization {

/**
 * Alumni of an organization.
 */
alumni?: Person | Person[]

}