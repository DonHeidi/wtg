import type { Action } from './Action.ts'

import type { Event } from './Event.ts'

import type { Audience } from './Audience.ts'


/**
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, competition or exercise.
 * \nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 */
export interface PlayAction extends Action {

/**
 * Upcoming or past event associated with this place, organization, or action.
 */
event?: Event | Event[]

/**
 * An intended audience, i.e. a group for whom something was created.
 */
audience?: Audience | Audience[]

}