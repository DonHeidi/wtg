import type { PlayAction } from './PlayAction.ts'

import type { Place } from './Place.ts'

import type { Distance } from './Distance.ts'

import type { Text } from './Text.ts'


/**
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 */
export interface ExerciseAction extends PlayAction {

/**
 * A sub property of location. The final location of the object or the agent after the action.
 */
toLocation?: Place | Place[]

/**
 * A sub property of location. The original location of the object or the agent before the action.
 */
fromLocation?: Place | Place[]

/**
 * The distance travelled, e.g. exercising or travelling.
 */
distance?: Distance | Distance[]

/**
 * Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
 */
exerciseType?: Text | Text[]

}