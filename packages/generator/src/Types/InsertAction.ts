import type { AddAction } from './AddAction.ts'

import type { Place } from './Place.ts'


/**
 * The act of adding at a specific location in an ordered collection.
 */
export interface InsertAction extends AddAction {

/**
 * A sub property of location. The final location of the object or the agent after the action.
 */
toLocation?: Place | Place[]

}