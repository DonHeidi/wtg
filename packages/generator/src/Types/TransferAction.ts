import type { Action } from './Action.ts'

import type { Place } from './Place.ts'


/**
 * The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 */
export interface TransferAction extends Action {

/**
 * A sub property of location. The final location of the object or the agent after the action.
 */
toLocation?: Place | Place[]

/**
 * A sub property of location. The original location of the object or the agent before the action.
 */
fromLocation?: Place | Place[]

}