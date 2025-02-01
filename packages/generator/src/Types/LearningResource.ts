import type { CreativeWork } from './CreativeWork.ts'

import type { AlignmentObject } from './AlignmentObject.ts'

import type { Text } from './Text.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { URL } from './URL.ts'


/**
 * The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
 * 
 * [[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.
 * 
 * [[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
 */
export interface LearningResource extends CreativeWork {

/**
 * An alignment to an established educational framework.
 * 
 * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 */
educationalAlignment?: AlignmentObject | AlignmentObject[]

/**
 * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
 */
learningResourceType?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
 */
educationalLevel?: Text | Text[] | URL | URL[] | DefinedTerm | DefinedTerm[]

/**
 * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
 */
educationalUse?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
 */
assesses?: DefinedTerm | DefinedTerm[] | Text | Text[]

/**
 * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
 */
teaches?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
 */
competencyRequired?: Text | Text[] | URL | URL[] | DefinedTerm | DefinedTerm[]

}