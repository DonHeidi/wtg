import type { UserInteraction } from './UserInteraction.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 */
export interface UserComments extends UserInteraction {

/**
 * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
 */
creator?: Person | Person[] | Organization | Organization[]

}