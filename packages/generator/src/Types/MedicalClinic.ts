import type { MedicalBusiness } from './MedicalBusiness.ts'
import type { MedicalOrganization } from './MedicalOrganization.ts'

import type { MedicalSpecialty } from './MedicalSpecialty.ts'

import type { MedicalTest } from './MedicalTest.ts'

import type { MedicalTherapy } from './MedicalTherapy.ts'

import type { MedicalProcedure } from './MedicalProcedure.ts'


/**
 * A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well.
 */
export interface MedicalClinic extends MedicalBusiness, MedicalOrganization {

/**
 * A medical specialty of the provider.
 */
medicalSpecialty?: MedicalSpecialty | MedicalSpecialty[]

/**
 * A medical service available from this provider.
 */
availableService?: MedicalTest | MedicalTest[] | MedicalTherapy | MedicalTherapy[] | MedicalProcedure | MedicalProcedure[]

}