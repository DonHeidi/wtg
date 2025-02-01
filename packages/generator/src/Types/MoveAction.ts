import type { Action } from './Action.ts'

import type { Place } from './Place.ts'


/**
 * The act of an agent relocating to a place.
 * \nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 */
export interface MoveAction extends Action {

/**
 * A sub property of location. The final location of the object or the agent after the action.
 */
toLocation?: Place | Place[]

/**
 * A sub property of location. The original location of the object or the agent before the action.
 */
fromLocation?: Place | Place[]

}