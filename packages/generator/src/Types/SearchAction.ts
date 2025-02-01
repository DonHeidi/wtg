import type { Action } from './Action.ts'


/**
 * The act of searching for an object.
 * \nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 */
export interface SearchAction extends Action {

}