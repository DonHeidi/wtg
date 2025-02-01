import type { Store } from './Store.ts'
import type { AutomotiveBusiness } from './AutomotiveBusiness.ts'


/**
 * An auto parts store.
 */
export interface AutoPartsStore extends Store, AutomotiveBusiness {

}