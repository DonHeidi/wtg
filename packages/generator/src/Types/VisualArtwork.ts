import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'

import type { Distance } from './Distance.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'


/**
 * A work of art that is primarily visual in character.
 */
export interface VisualArtwork extends CreativeWork {

/**
 * The individual who adds lettering, including speech balloons and sound effects, to artwork.
 */
letterer?: Person | Person[]

/**
 * The individual who traces over the pencil drawings in ink after pencils are complete.
 */
inker?: Person | Person[]

/**
 * The individual who adds color to inked drawings.
 */
colorist?: Person | Person[]

/**
 * The primary artist for a work
 *     	in a medium other than pencils or digital line art--for example, if the
 *     	primary artwork is done in watercolors or digital paints.
 */
artist?: Person | Person[]

/**
 * The height of the item.
 */
height?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * The width of the item.
 */
width?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * The individual who draws the primary narrative artwork.
 */
penciler?: Person | Person[]

/**
 * The weight of the product or person.
 */
weight?: QuantitativeValue | QuantitativeValue[]

/**
 * The depth of the item.
 */
depth?: QuantitativeValue | QuantitativeValue[] | Distance | Distance[]

}