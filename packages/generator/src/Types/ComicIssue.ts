import type { PublicationIssue } from './PublicationIssue.ts'

import type { Person } from './Person.ts'


/**
 * Individual comic issues are serially published as
 *     	part of a larger series. For the sake of consistency, even one-shot issues
 *     	belong to a series comprised of a single issue. All comic issues can be
 *     	uniquely identified by: the combination of the name and volume number of the
 *     	series to which the issue belongs; the issue number; and the variant
 *     	description of the issue (if any).
 */
export interface ComicIssue extends PublicationIssue {

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