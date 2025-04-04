import type { ListItem } from './ListItem.ts'
import type { CreativeWork } from './CreativeWork.ts'


/**
 * An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).
 */
export interface HowToTip extends ListItem, CreativeWork {

}