import type { Vessel } from './Vessel.ts'

import type { AnatomicalSystem } from './AnatomicalSystem.ts'

import type { AnatomicalStructure } from './AnatomicalStructure.ts'


/**
 * A type of blood vessel that specifically carries blood to the heart.
 */
export interface Vein extends Vessel {

/**
 * The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.
 */
regionDrained?: AnatomicalSystem | AnatomicalSystem[] | AnatomicalStructure | AnatomicalStructure[]

}