import type { LifestyleModification } from './LifestyleModification.ts'

import type { Text } from './Text.ts'

import type { AnatomicalStructure } from './AnatomicalStructure.ts'

import type { AnatomicalSystem } from './AnatomicalSystem.ts'

import type { SuperficialAnatomy } from './SuperficialAnatomy.ts'

import type { Thing } from './Thing.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { URL } from './URL.ts'


/**
 * Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
 */
export interface PhysicalActivity extends LifestyleModification {

/**
 * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
 */
pathophysiology?: Text | Text[]

/**
 * The anatomy of the underlying organ system or structures associated with this entity.
 */
associatedAnatomy?: AnatomicalStructure | AnatomicalStructure[] | AnatomicalSystem | AnatomicalSystem[] | SuperficialAnatomy | SuperficialAnatomy[]

/**
 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 */
category?: Thing | Thing[] | PhysicalActivityCategory | PhysicalActivityCategory[] | CategoryCode | CategoryCode[] | Text | Text[] | URL | URL[]

/**
 * The characteristics of associated patients, such as age, gender, race etc.
 */
epidemiology?: Text | Text[]

}