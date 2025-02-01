import type { EducationalOccupationalProgram } from './EducationalOccupationalProgram.ts'

import type { MonetaryAmountDistribution } from './MonetaryAmountDistribution.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { Text } from './Text.ts'


/**
 * A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs.
 */
export interface WorkBasedProgram extends EducationalOccupationalProgram {

/**
 * The estimated salary earned while in the program.
 */
trainingSalary?: MonetaryAmountDistribution | MonetaryAmountDistribution[]

/**
 * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
 * 
 * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
 */
occupationalCategory?: CategoryCode | CategoryCode[] | Text | Text[]

}