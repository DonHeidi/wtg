import type { ListItem } from './ListItem.ts'
import type { CreativeWork } from './CreativeWork.ts'
import type { ItemList } from './ItemList.ts'


/**
 * A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.
 */
export interface HowToStep extends ListItem, CreativeWork, ItemList {

}