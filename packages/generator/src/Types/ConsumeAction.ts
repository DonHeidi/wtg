import type { Action } from './Action.ts'

import type { Offer } from './Offer.ts'


/**
 * The act of ingesting information/resources/food.
 */
export interface ConsumeAction extends Action {

/**
 * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
 */
expectsAcceptanceOf?: Offer | Offer[]

}