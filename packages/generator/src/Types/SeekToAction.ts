import type { Action } from './Action.ts'

import type { HyperTocEntry } from './HyperTocEntry.ts'

import type { Number } from './Number.ts'


/**
 * This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure.
 */
export interface SeekToAction extends Action {

/**
 * The start time of the clip expressed as the number of seconds from the beginning of the work.
 */
startOffset?: HyperTocEntry | HyperTocEntry[] | Number | Number[]

}