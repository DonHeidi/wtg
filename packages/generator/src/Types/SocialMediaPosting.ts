import type { Article } from './Article.ts'

import type { CreativeWork } from './CreativeWork.ts'


/**
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 */
export interface SocialMediaPosting extends Article {

/**
 * A CreativeWork such as an image, video, or audio clip shared as part of this posting.
 */
sharedContent?: CreativeWork | CreativeWork[]

}