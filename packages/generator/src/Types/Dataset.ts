import type { CreativeWork } from './CreativeWork.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { MeasurementMethodEnum } from './MeasurementMethodEnum.ts'

import type { StatisticalVariable } from './StatisticalVariable.ts'

import type { Property } from './Property.ts'

import type { PropertyValue } from './PropertyValue.ts'


/**
 * A body of structured information describing some topic(s) of interest.
 */
export interface Dataset extends CreativeWork {

/**
 * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
 */
issn?: Text | Text[]

/**
 * A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].
 */
measurementMethod?: URL | URL[] | DefinedTerm | DefinedTerm[] | MeasurementMethodEnum | MeasurementMethodEnum[] | Text | Text[]

/**
 * The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue, or more explicitly as a [[StatisticalVariable]].
 */
variableMeasured?: StatisticalVariable | StatisticalVariable[] | Property | Property[] | Text | Text[] | PropertyValue | PropertyValue[]

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

}