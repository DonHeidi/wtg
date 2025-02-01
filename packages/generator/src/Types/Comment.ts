import type { CreativeWork } from './CreativeWork.ts'


/**
 * A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 */
export interface Comment extends CreativeWork {

/**
 * The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.
 */
parentItem?: CreativeWork | CreativeWork[] | Comment | Comment[]

/**
 * A CreativeWork such as an image, video, or audio clip shared as part of this posting.
 */
sharedContent?: CreativeWork | CreativeWork[]

}