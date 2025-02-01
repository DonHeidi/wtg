import type { Physician } from './Physician.ts'


/**
 * An individual medical practitioner. For their official address use [[address]], for affiliations to hospitals use [[hospitalAffiliation]]. 
 * The [[practicesAt]] property can be used to indicate [[MedicalOrganization]] hospitals, clinics, pharmacies etc. where this physician practices.
 */
export interface IndividualPhysician extends Physician {

}