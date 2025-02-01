import type { Event } from './Event.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * Event type: Education event.
 */
export interface EducationEvent extends Event {

/**
 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
 */
educationalLevel?: Text | Text[] | URL | URL[] | DefinedTerm | DefinedTerm[]

/**
 * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
 */
assesses?: DefinedTerm | DefinedTerm[] | Text | Text[]

/**
 * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
 */
teaches?: Text | Text[] | DefinedTerm | DefinedTerm[]

}