import type { HowToItem } from './HowToItem.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Text } from './Text.ts'


/**
 * A supply consumed when performing the instructions for how to achieve a result.
 */
export interface HowToSupply extends HowToItem {

/**
 * The estimated cost of the supply or supplies consumed when performing instructions.
 */
estimatedCost?: MonetaryAmount | MonetaryAmount[] | Text | Text[]

}