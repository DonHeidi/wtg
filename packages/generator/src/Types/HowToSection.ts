import type { ListItem } from './ListItem.ts'
import type { CreativeWork } from './CreativeWork.ts'
import type { ItemList } from './ItemList.ts'

import type { ItemList } from './ItemList.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'


/**
 * A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).
 */
export interface HowToSection extends ListItem, CreativeWork, ItemList {

/**
 * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
 */
steps?: ItemList | ItemList[] | CreativeWork | CreativeWork[] | Text | Text[]

}