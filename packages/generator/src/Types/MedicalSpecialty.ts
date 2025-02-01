import type { MedicalEnumeration } from './MedicalEnumeration.ts'
import type { Specialty } from './Specialty.ts'


/**
 * Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.
 */
export interface MedicalSpecialty extends MedicalEnumeration, Specialty {

}