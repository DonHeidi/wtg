import type { CivicStructure } from './CivicStructure.ts'
import type { EmergencyService } from './EmergencyService.ts'


/**
 * A fire station. With firemen.
 */
export interface FireStation extends CivicStructure, EmergencyService {

}