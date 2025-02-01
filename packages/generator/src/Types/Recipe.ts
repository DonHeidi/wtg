import type { HowTo } from './HowTo.ts'

import type { RestrictedDiet } from './RestrictedDiet.ts'

import type { NutritionInformation } from './NutritionInformation.ts'


/**
 * A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 */
export interface Recipe extends HowTo {

/**
 * Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
 */
suitableForDiet?: RestrictedDiet | RestrictedDiet[]

/**
 * Nutrition information about the recipe or menu item.
 */
nutrition?: NutritionInformation | NutritionInformation[]

}