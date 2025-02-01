import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'


/**
 * The term "story" is any indivisible, re-printable
 *     	unit of a comic, including the interior stories, covers, and backmatter. Most
 *     	comics have at least two stories: a cover (ComicCoverArt) and an interior story.
 */
export interface ComicStory extends CreativeWork {

/**
 * The individual who adds lettering, including speech balloons and sound effects, to artwork.
 */
letterer?: Person | Person[]

/**
 * The individual who traces over the pencil drawings in ink after pencils are complete.
 */
inker?: Person | Person[]

/**
 * The individual who adds color to inked drawings.
 */
colorist?: Person | Person[]

/**
 * The primary artist for a work
 *     	in a medium other than pencils or digital line art--for example, if the
 *     	primary artwork is done in watercolors or digital paints.
 */
artist?: Person | Person[]

/**
 * The individual who draws the primary narrative artwork.
 */
penciler?: Person | Person[]

}