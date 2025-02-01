import type { Place } from './Place.ts'

import type { FloorPlan } from './FloorPlan.ts'


/**
 * The place where a person lives.
 */
export interface Residence extends Place {

/**
 * A floorplan of some [[Accommodation]].
 */
accommodationFloorPlan?: FloorPlan | FloorPlan[]

}