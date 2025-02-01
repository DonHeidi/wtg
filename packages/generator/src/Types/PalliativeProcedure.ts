import type { MedicalTherapy } from './MedicalTherapy.ts'
import type { MedicalProcedure } from './MedicalProcedure.ts'


/**
 * A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition.
 */
export interface PalliativeProcedure extends MedicalTherapy, MedicalProcedure {

}