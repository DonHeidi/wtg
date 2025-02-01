import type { CreativeWork } from './CreativeWork.ts'
import type { LearningResource } from './LearningResource.ts'

import type { Text } from './Text.ts'

import type { EducationalOccupationalCredential } from './EducationalOccupationalCredential.ts'

import type { URL } from './URL.ts'

import type { Integer } from './Integer.ts'

import type { StructuredValue } from './StructuredValue.ts'

import type { Language } from './Language.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * A description of an educational course which may be offered as distinct instances which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 */
export interface Course extends CreativeWork, LearningResource {

/**
 * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
 */
occupationalCredentialAwarded?: Text | Text[] | EducationalOccupationalCredential | EducationalOccupationalCredential[] | URL | URL[]

/**
 * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
 */
numberOfCredits?: Integer | Integer[] | StructuredValue | StructuredValue[]

/**
 * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
 */
educationalCredentialAwarded?: Text | Text[] | EducationalOccupationalCredential | EducationalOccupationalCredential[] | URL | URL[]

/**
 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
 */
availableLanguage?: Text | Text[] | Language | Language[]

/**
 * A financial aid type or program which students may use to pay for tuition or fees associated with the program.
 */
financialAidEligible?: Text | Text[] | DefinedTerm | DefinedTerm[]

}