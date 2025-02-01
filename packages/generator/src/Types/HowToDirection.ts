import type { ListItem } from './ListItem.ts'
import type { CreativeWork } from './CreativeWork.ts'

import type { Duration } from './Duration.ts'

import type { HowToTool } from './HowToTool.ts'

import type { Text } from './Text.ts'

import type { HowToSupply } from './HowToSupply.ts'


/**
 * A direction indicating a single action to do in the instructions for how to achieve a result.
 */
export interface HowToDirection extends ListItem, CreativeWork {

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
 * The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 */
performTime?: Duration | Duration[]

/**
 * A sub-property of instrument. A supply consumed when performing instructions or a direction.
 */
supply?: Text | Text[] | HowToSupply | HowToSupply[]

}