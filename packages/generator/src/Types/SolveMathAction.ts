import type { Action } from './Action.ts'

import type { Text } from './Text.ts'


/**
 * The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression.
 */
export interface SolveMathAction extends Action {

/**
 * For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard".
 */
eduQuestionType?: Text | Text[]

}