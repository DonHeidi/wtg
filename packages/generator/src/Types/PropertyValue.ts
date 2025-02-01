import type { StructuredValue } from './StructuredValue.ts'

import type { Number } from './Number.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { MeasurementMethodEnum } from './MeasurementMethodEnum.ts'

import type { Boolean } from './Boolean.ts'

import type { MeasurementTypeEnumeration } from './MeasurementTypeEnumeration.ts'

import type { Enumeration } from './Enumeration.ts'

import type { QualitativeValue } from './QualitativeValue.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'


/**
 * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.
 * \n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
 *     
 */
export interface PropertyValue extends StructuredValue {

/**
 * The lower value of some characteristic or property.
 */
minValue?: Number | Number[]

/**
 * The upper value of some characteristic or property.
 */
maxValue?: Number | Number[]

/**
 * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
 */
unitCode?: Text | Text[] | URL | URL[]

/**
 * A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].
 */
measurementMethod?: URL | URL[] | DefinedTerm | DefinedTerm[] | MeasurementMethodEnum | MeasurementMethodEnum[] | Text | Text[]

/**
 * The value of a [[QuantitativeValue]] (including [[Observation]]) or property value node.
 * \n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 */
value?: Boolean | Boolean[] | Text | Text[] | Number | Number[] | StructuredValue | StructuredValue[]

/**
 * A technique, method or technology used in an [[Observation]], [[StatisticalVariable]] or [[Dataset]] (or [[DataDownload]], [[DataCatalog]]), corresponding to the method used for measuring the corresponding variable(s) (for datasets, described using [[variableMeasured]]; for [[Observation]], a [[StatisticalVariable]]). Often but not necessarily each [[variableMeasured]] will have an explicit representation as (or mapping to) an property such as those defined in Schema.org, or other RDF vocabularies and "knowledge graphs". In that case the subproperty of [[variableMeasured]] called [[measuredProperty]] is applicable.
 *     
 * The [[measurementTechnique]] property helps when extra clarification is needed about how a [[measuredProperty]] was measured. This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but can often serve as a high level summary for dataset discovery. 
 * 
 * For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence". If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory". 
 * 
 * If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]]. The value can also be from an enumeration, organized as a [[MeasurementMetholdEnumeration]].
 */
measurementTechnique?: Text | Text[] | URL | URL[] | DefinedTerm | DefinedTerm[] | MeasurementMethodEnum | MeasurementMethodEnum[]

/**
 * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
 */
valueReference?: Text | Text[] | DefinedTerm | DefinedTerm[] | PropertyValue | PropertyValue[] | MeasurementTypeEnumeration | MeasurementTypeEnumeration[] | StructuredValue | StructuredValue[] | Enumeration | Enumeration[] | QualitativeValue | QualitativeValue[] | QuantitativeValue | QuantitativeValue[]

/**
 * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
 * <a href='unitCode'>unitCode</a>.
 */
unitText?: Text | Text[]

}