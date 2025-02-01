import type { Intangible } from './Intangible.ts'

import type { Boolean } from './Boolean.ts'

import type { Text } from './Text.ts'


/**
 * A US-style health insurance plan network.
 */
export interface HealthPlanNetwork extends Intangible {

/**
 * The costs to the patient for services under this network or formulary.
 */
healthPlanCostSharing?: Boolean | Boolean[]

/**
 * Name or unique ID of network. (Networks are often reused across different insurance plans.)
 */
healthPlanNetworkId?: Text | Text[]

}