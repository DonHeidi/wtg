import type { PhysicalActivity } from './PhysicalActivity.ts'
import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'


/**
 * Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.
 */
export interface ExercisePlan extends PhysicalActivity, CreativeWork {

/**
 * Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
 */
exerciseType?: Text | Text[]

}