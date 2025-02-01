import type { MedicalProcedure } from './MedicalProcedure.ts'

import type { DoseSchedule } from './DoseSchedule.ts'

import type { Drug } from './Drug.ts'

import type { MedicalEntity } from './MedicalEntity.ts'


/**
 * A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 */
export interface TherapeuticProcedure extends MedicalProcedure {

/**
 * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
 */
doseSchedule?: DoseSchedule | DoseSchedule[]

/**
 * Specifying a drug or medicine used in a medication procedure.
 */
drug?: Drug | Drug[]

/**
 * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead.
 */
adverseOutcome?: MedicalEntity | MedicalEntity[]

}