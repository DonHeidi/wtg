import type { CommunicateAction } from './CommunicateAction.ts'

import type { Comment } from './Comment.ts'


/**
 * The act of responding to a question/message asked/sent by the object. Related to [[AskAction]].
 * \nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 */
export interface ReplyAction extends CommunicateAction {

/**
 * A sub property of result. The Comment created or sent as a result of this action.
 */
resultComment?: Comment | Comment[]

}