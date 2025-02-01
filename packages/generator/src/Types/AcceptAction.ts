import type { AllocateAction } from './AllocateAction.ts'


/**
 * The act of committing to/adopting an object.
 * \nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction.
 */
export interface AcceptAction extends AllocateAction {

}