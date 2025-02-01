import type { CivicStructure } from './CivicStructure.ts'
import type { MedicalOrganization } from './MedicalOrganization.ts'
import type { EmergencyService } from './EmergencyService.ts'

import type { MedicalSpecialty } from './MedicalSpecialty.ts'

import type { MedicalTest } from './MedicalTest.ts'

import type { MedicalTherapy } from './MedicalTherapy.ts'

import type { MedicalProcedure } from './MedicalProcedure.ts'


/**
 * A hospital.
 */
export interface Hospital extends CivicStructure, MedicalOrganization, EmergencyService {

/**
 * A medical specialty of the provider.
 */
medicalSpecialty?: MedicalSpecialty | MedicalSpecialty[]

/**
 * A medical service available from this provider.
 */
availableService?: MedicalTest | MedicalTest[] | MedicalTherapy | MedicalTherapy[] | MedicalProcedure | MedicalProcedure[]

}