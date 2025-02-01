import type { Enumeration } from './Enumeration.ts'

import type { PropertyValue } from './PropertyValue.ts'

import type { Text } from './Text.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { MeasurementTypeEnumeration } from './MeasurementTypeEnumeration.ts'

import type { StructuredValue } from './StructuredValue.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'


/**
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 */
export interface QualitativeValue extends Enumeration {

/**
 * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
 * \nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
 * 
 */
additionalProperty?: PropertyValue | PropertyValue[]

/**
 * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
 */
valueReference?: Text | Text[] | DefinedTerm | DefinedTerm[] | PropertyValue | PropertyValue[] | MeasurementTypeEnumeration | MeasurementTypeEnumeration[] | StructuredValue | StructuredValue[] | Enumeration | Enumeration[] | QualitativeValue | QualitativeValue[] | QuantitativeValue | QuantitativeValue[]

}