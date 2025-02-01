import type { InteractAction } from './InteractAction.ts'


/**
 * The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.
 * \nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 */
export interface BefriendAction extends InteractAction {

}