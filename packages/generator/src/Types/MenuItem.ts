import type { Intangible } from './Intangible.ts'

import type { RestrictedDiet } from './RestrictedDiet.ts'

import type { NutritionInformation } from './NutritionInformation.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'


/**
 * A food or drink item listed in a menu or menu section.
 */
export interface MenuItem extends Intangible {

/**
 * Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
 */
suitableForDiet?: RestrictedDiet | RestrictedDiet[]

/**
 * Nutrition information about the recipe or menu item.
 */
nutrition?: NutritionInformation | NutritionInformation[]

/**
 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 *       
 */
offers?: Offer | Offer[] | Demand | Demand[]

}