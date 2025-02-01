import type { Organization } from './Organization.ts'

import type { Text } from './Text.ts'

import type { MedicalSpecialty } from './MedicalSpecialty.ts'


/**
 * A medical organization (physical or not), such as hospital, institution or clinic.
 */
export interface MedicalOrganization extends Organization {

/**
 * Name or unique ID of network. (Networks are often reused across different insurance plans.)
 */
healthPlanNetworkId?: Text | Text[]

/**
 * A medical specialty of the provider.
 */
medicalSpecialty?: MedicalSpecialty | MedicalSpecialty[]

}