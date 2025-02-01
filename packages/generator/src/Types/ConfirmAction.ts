import type { InformAction } from './InformAction.ts'


/**
 * The act of notifying someone that a future event/action is going to happen as expected.
 * \nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction.
 */
export interface ConfirmAction extends InformAction {

}