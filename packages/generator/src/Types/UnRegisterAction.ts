import type { InteractAction } from './InteractAction.ts'


/**
 * The act of un-registering from a service.
 * \nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [[LeaveAction]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you were previously registered, rather than leaving a team/group of people.
 */
export interface UnRegisterAction extends InteractAction {

}