import type { MedicalBusiness } from './MedicalBusiness.ts'
import type { MedicalOrganization } from './MedicalOrganization.ts'


/**
 * A pharmacy or drugstore.
 */
export interface Pharmacy extends MedicalBusiness, MedicalOrganization {

}