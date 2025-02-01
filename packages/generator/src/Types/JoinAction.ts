import type { InteractAction } from './InteractAction.ts'

import type { Event } from './Event.ts'


/**
 * An agent joins an event/group with participants/friends at a location.
 * \nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 */
export interface JoinAction extends InteractAction {

/**
 * Upcoming or past event associated with this place, organization, or action.
 */
event?: Event | Event[]

}