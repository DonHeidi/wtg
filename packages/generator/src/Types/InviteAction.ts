import type { CommunicateAction } from './CommunicateAction.ts'

import type { Event } from './Event.ts'


/**
 * The act of asking someone to attend an event. Reciprocal of RsvpAction.
 */
export interface InviteAction extends CommunicateAction {

/**
 * Upcoming or past event associated with this place, organization, or action.
 */
event?: Event | Event[]

}