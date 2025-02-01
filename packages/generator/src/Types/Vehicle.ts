import type { Product } from './Product.ts'

import type { Date } from './Date.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { QualitativeValue } from './QualitativeValue.ts'


/**
 * A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 */
export interface Vehicle extends Product {

/**
 * The date of production of the item, e.g. vehicle.
 */
productionDate?: Date | Date[]

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 */
callSign?: Text | Text[]

/**
 * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
 */
fuelType?: URL | URL[] | QualitativeValue | QualitativeValue[] | Text | Text[]

/**
 * The date the item, e.g. vehicle, was purchased by the current owner.
 */
purchaseDate?: Date | Date[]

}