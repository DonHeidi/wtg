import type { QualitativeValue } from './QualitativeValue.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { GenderType } from './GenderType.ts'

import type { Text } from './Text.ts'


/**
 * Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).
 */
export interface SizeSpecification extends QualitativeValue {

/**
 * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
 */
hasMeasurement?: QuantitativeValue | QuantitativeValue[]

/**
 * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
 */
suggestedAge?: QuantitativeValue | QuantitativeValue[]

/**
 * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
 */
suggestedGender?: GenderType | GenderType[] | Text | Text[]

/**
 * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
 */
suggestedMeasurement?: QuantitativeValue | QuantitativeValue[]

}