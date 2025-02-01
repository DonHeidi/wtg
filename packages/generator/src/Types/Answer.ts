import type { Comment } from './Comment.ts'

import type { CreativeWork } from './CreativeWork.ts'


/**
 * An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 */
export interface Answer extends Comment {

/**
 * The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.
 */
parentItem?: CreativeWork | CreativeWork[] | Comment | Comment[]

}