import type { MoveAction } from './MoveAction.ts'

import type { Distance } from './Distance.ts'


/**
 * The act of traveling from a fromLocation to a destination by a specified mode of transport, optionally with participants.
 */
export interface TravelAction extends MoveAction {

/**
 * The distance travelled, e.g. exercising or travelling.
 */
distance?: Distance | Distance[]

}