import type { ComicStory } from './ComicStory.ts'
import type { CoverArt } from './CoverArt.ts'


/**
 * The artwork on the cover of a comic.
 */
export interface ComicCoverArt extends ComicStory, CoverArt {

}