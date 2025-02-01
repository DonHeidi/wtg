import type { PlanAction } from './PlanAction.ts'


/**
 * The act of asserting that a future event/action is no longer going to happen.
 * \nRelated actions:\n\n* [[ConfirmAction]]: The antonym of CancelAction.
 */
export interface CancelAction extends PlanAction {

}