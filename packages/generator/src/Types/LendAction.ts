import type { TransferAction } from './TransferAction.ts'


/**
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.
 * \nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 */
export interface LendAction extends TransferAction {

}