import type { CreativeWork } from './CreativeWork.ts'

import type { Thing } from './Thing.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { URL } from './URL.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { Place } from './Place.ts'


/**
 * The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
 */
export interface Game extends CreativeWork {

/**
 * The task that a player-controlled character, or group of characters may complete in order to gain a reward.
 */
quest?: Thing | Thing[]

/**
 * Indicate how many people can play this game (minimum, maximum, or range).
 */
numberOfPlayers?: QuantitativeValue | QuantitativeValue[]

/**
 * An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
 */
gameItem?: Thing | Thing[]

/**
 * Real or fictional location of the game (or part of game).
 */
gameLocation?: URL | URL[] | PostalAddress | PostalAddress[] | Place | Place[]

/**
 * A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
 */
characterAttribute?: Thing | Thing[]

}