import type { MedicalEnumeration } from './MedicalEnumeration.ts'
import type { MedicalProcedure } from './MedicalProcedure.ts'


/**
 * A type of physical examination of a patient performed by a physician. 
 */
export interface PhysicalExam extends MedicalEnumeration, MedicalProcedure {

}