import type { Comment } from './Comment.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'


/**
 * A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
 */
export interface Question extends Comment {

/**
 * The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.
 */
parentItem?: CreativeWork | CreativeWork[] | Comment | Comment[]

/**
 * For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard".
 */
eduQuestionType?: Text | Text[]

}