import type { InformAction } from './InformAction.ts'

import type { Comment } from './Comment.ts'


/**
 * The act of notifying an event organizer as to whether you expect to attend the event.
 */
export interface RsvpAction extends InformAction {

/**
 * Comments, typically from users.
 */
comment?: Comment | Comment[]

}