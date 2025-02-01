import type { CommunicateAction } from './CommunicateAction.ts'

import type { Event } from './Event.ts'


/**
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 */
export interface InformAction extends CommunicateAction {

/**
 * Upcoming or past event associated with this place, organization, or action.
 */
event?: Event | Event[]

}