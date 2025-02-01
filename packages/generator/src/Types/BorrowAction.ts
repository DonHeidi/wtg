import type { TransferAction } from './TransferAction.ts'


/**
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.
 * \nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 */
export interface BorrowAction extends TransferAction {

}