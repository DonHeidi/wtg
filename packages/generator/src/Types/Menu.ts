import type { CreativeWork } from './CreativeWork.ts'

import type { MenuItem } from './MenuItem.ts'

import type { MenuSection } from './MenuSection.ts'


/**
 * A structured representation of food or drink items available from a FoodEstablishment.
 */
export interface Menu extends CreativeWork {

/**
 * A food or drink item contained in a menu or menu section.
 */
hasMenuItem?: MenuItem | MenuItem[]

/**
 * A subgrouping of the menu (by dishes, course, serving time period, etc.).
 */
hasMenuSection?: MenuSection | MenuSection[]

}