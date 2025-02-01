import type { CommunicateAction } from './CommunicateAction.ts'


/**
 * The act of posing a question / favor to someone.
 * \nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 */
export interface AskAction extends CommunicateAction {

}