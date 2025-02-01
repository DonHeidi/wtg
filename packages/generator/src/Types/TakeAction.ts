import type { TransferAction } from './TransferAction.ts'


/**
 * The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.
 * \nRelated actions:\n\n* [[GiveAction]]: The reciprocal of TakeAction.\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transferred.
 */
export interface TakeAction extends TransferAction {

}