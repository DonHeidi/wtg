import type { CivicStructure } from './CivicStructure.ts'
import type { SportsActivityLocation } from './SportsActivityLocation.ts'


/**
 * A stadium.
 */
export interface StadiumOrArena extends CivicStructure, SportsActivityLocation {

}