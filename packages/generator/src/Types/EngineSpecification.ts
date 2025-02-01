import type { StructuredValue } from './StructuredValue.ts'

import type { URL } from './URL.ts'

import type { QualitativeValue } from './QualitativeValue.ts'

import type { Text } from './Text.ts'


/**
 * Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 */
export interface EngineSpecification extends StructuredValue {

/**
 * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
 */
fuelType?: URL | URL[] | QualitativeValue | QualitativeValue[] | Text | Text[]

}