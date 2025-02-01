import type { CreativeWork } from './CreativeWork.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { Duration } from './Duration.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
 */
export interface EducationalOccupationalCredential extends CreativeWork {

/**
 * The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. 
 */
validIn?: AdministrativeArea | AdministrativeArea[]

/**
 * The duration of validity of a permit or similar thing.
 */
validFor?: Duration | Duration[]

/**
 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
 */
educationalLevel?: Text | Text[] | URL | URL[] | DefinedTerm | DefinedTerm[]

/**
 * Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
 */
competencyRequired?: Text | Text[] | URL | URL[] | DefinedTerm | DefinedTerm[]

}