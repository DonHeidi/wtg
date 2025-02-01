import type { MedicalOrganization } from './MedicalOrganization.ts'
import type { MedicalBusiness } from './MedicalBusiness.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { Text } from './Text.ts'

import type { MedicalSpecialty } from './MedicalSpecialty.ts'

import type { MedicalTest } from './MedicalTest.ts'

import type { MedicalTherapy } from './MedicalTherapy.ts'

import type { MedicalProcedure } from './MedicalProcedure.ts'


/**
 * An individual physician or a physician's office considered as a [[MedicalOrganization]].
 */
export interface Physician extends MedicalOrganization, MedicalBusiness {

/**
 * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
 * 
 * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
 */
occupationalCategory?: CategoryCode | CategoryCode[] | Text | Text[]

/**
 * A medical specialty of the provider.
 */
medicalSpecialty?: MedicalSpecialty | MedicalSpecialty[]

/**
 * A medical service available from this provider.
 */
availableService?: MedicalTest | MedicalTest[] | MedicalTherapy | MedicalTherapy[] | MedicalProcedure | MedicalProcedure[]

}