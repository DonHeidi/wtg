import type { Action } from './Action.ts'


/**
 * The act of finding an object.
 * \nRelated actions:\n\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, but not necessarily.
 */
export interface FindAction extends Action {

}