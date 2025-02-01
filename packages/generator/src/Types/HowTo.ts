import type { CreativeWork } from './CreativeWork.ts'

import type { Duration } from './Duration.ts'

import type { HowToTool } from './HowToTool.ts'

import type { Text } from './Text.ts'

import type { ItemList } from './ItemList.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { HowToSupply } from './HowToSupply.ts'


/**
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 */
export interface HowTo extends CreativeWork {

/**
 * The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
prepTime?: Duration | Duration[]

/**
 * A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.
 */
tool?: HowToTool | HowToTool[] | Text | Text[]

/**
 * The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
totalTime?: Duration | Duration[]

/**
 * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
 */
steps?: ItemList | ItemList[] | CreativeWork | CreativeWork[] | Text | Text[]

/**
 * The estimated cost of the supply or supplies consumed when performing instructions.
 */
estimatedCost?: MonetaryAmount | MonetaryAmount[] | Text | Text[]

/**
 * The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
performTime?: Duration | Duration[]

/**
 * A sub-property of instrument. A supply consumed when performing instructions or a direction.
 */
supply?: Text | Text[] | HowToSupply | HowToSupply[]

}