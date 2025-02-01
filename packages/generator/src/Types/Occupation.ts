import type { Intangible } from './Intangible.ts'

import type { Text } from './Text.ts'

import type { EducationalOccupationalCredential } from './EducationalOccupationalCredential.ts'

import type { OccupationalExperienceRequirements } from './OccupationalExperienceRequirements.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Number } from './Number.ts'

import type { MonetaryAmountDistribution } from './MonetaryAmountDistribution.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { CategoryCode } from './CategoryCode.ts'


/**
 * A profession, may involve prolonged training and/or a formal qualification.
 */
export interface Occupation extends Intangible {

/**
 * Specific qualifications required for this role or Occupation.
 */
qualifications?: Text | Text[] | EducationalOccupationalCredential | EducationalOccupationalCredential[]

/**
 * Description of skills and experience needed for the position or Occupation.
 */
experienceRequirements?: OccupationalExperienceRequirements | OccupationalExperienceRequirements[] | Text | Text[]

/**
 * An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
 */
estimatedSalary?: MonetaryAmount | MonetaryAmount[] | Number | Number[] | MonetaryAmountDistribution | MonetaryAmountDistribution[]

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 */
skills?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
 * 
 * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
 */
occupationalCategory?: CategoryCode | CategoryCode[] | Text | Text[]

/**
 * Responsibilities associated with this role or Occupation.
 */
responsibilities?: Text | Text[]

/**
 * Educational background needed for the position or Occupation.
 */
educationRequirements?: Text | Text[] | EducationalOccupationalCredential | EducationalOccupationalCredential[]

}