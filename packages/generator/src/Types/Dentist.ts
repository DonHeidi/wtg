import type { MedicalOrganization } from './MedicalOrganization.ts'
import type { LocalBusiness } from './LocalBusiness.ts'
import type { MedicalBusiness } from './MedicalBusiness.ts'


/**
 * A dentist.
 */
export interface Dentist extends MedicalOrganization, LocalBusiness, MedicalBusiness {

}