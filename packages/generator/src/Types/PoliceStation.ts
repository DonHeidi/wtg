import type { EmergencyService } from './EmergencyService.ts'
import type { CivicStructure } from './CivicStructure.ts'


/**
 * A police station.
 */
export interface PoliceStation extends EmergencyService, CivicStructure {

}