import type { CommunicateAction } from './CommunicateAction.ts'

import type { Comment } from './Comment.ts'


/**
 * The act of generating a comment about a subject.
 */
export interface CommentAction extends CommunicateAction {

/**
 * A sub property of result. The Comment created or sent as a result of this action.
 */
resultComment?: Comment | Comment[]

}