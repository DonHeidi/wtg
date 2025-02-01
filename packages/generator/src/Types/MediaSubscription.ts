import type { Intangible } from './Intangible.ts'

import type { Offer } from './Offer.ts'


/**
 * A subscription which allows a user to access media including audio, video, books, etc.
 */
export interface MediaSubscription extends Intangible {

/**
 * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
 */
expectsAcceptanceOf?: Offer | Offer[]

}