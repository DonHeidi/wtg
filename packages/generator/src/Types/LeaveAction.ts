import type { InteractAction } from './InteractAction.ts'

import type { Event } from './Event.ts'


/**
 * An agent leaves an event / group with participants/friends at a location.
 * \nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 */
export interface LeaveAction extends InteractAction {

/**
 * Upcoming or past event associated with this place, organization, or action.
 */
event?: Event | Event[]

}