import type { CreativeWork } from './CreativeWork.ts'

import type { MenuItem } from './MenuItem.ts'


/**
 * A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 */
export interface MenuSection extends CreativeWork {

/**
 * A food or drink item contained in a menu or menu section.
 */
hasMenuItem?: MenuItem | MenuItem[]

/**
 * A subgrouping of the menu (by dishes, course, serving time period, etc.).
 */
hasMenuSection?: MenuSection | MenuSection[]

}