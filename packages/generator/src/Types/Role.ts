import type { Intangible } from './Intangible.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'


/**
 * Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.
 * \nSee also [blog post](http://blog.schema.org/2014/06/introducing-role.html).
 */
export interface Role extends Intangible {

/**
 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
startDate?: DateTime | DateTime[] | Date | Date[]

/**
 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
endDate?: Date | Date[] | DateTime | DateTime[]

}