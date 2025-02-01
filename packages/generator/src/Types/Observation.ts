import type { QuantitativeValue } from './QuantitativeValue.ts'
import type { Intangible } from './Intangible.ts'

import type { Property } from './Property.ts'

import type { URL } from './URL.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { MeasurementMethodEnum } from './MeasurementMethodEnum.ts'

import type { Text } from './Text.ts'

import type { Enumeration } from './Enumeration.ts'

import type { StatisticalVariable } from './StatisticalVariable.ts'

import type { PropertyValue } from './PropertyValue.ts'


/**
 * Instances of the class [[Observation]] are used to specify observations about an entity at a particular time. The principal properties of an [[Observation]] are [[observationAbout]], [[measuredProperty]], [[statType]], [[value] and [[observationDate]]  and [[measuredProperty]]. Some but not all Observations represent a [[QuantitativeValue]]. Quantitative observations can be about a [[StatisticalVariable]], which is an abstract specification about which we can make observations that are grounded at a particular location and time.
 * 
 * Observations can also encode a subset of simple RDF-like statements (its observationAbout, a StatisticalVariable, defining the measuredPoperty; its observationAbout property indicating the entity the statement is about, and [[value]] )
 * 
 * In the context of a quantitative knowledge graph, typical properties could include [[measuredProperty]], [[observationAbout]], [[observationDate]], [[value]], [[unitCode]], [[unitText]], [[measurementMethod]].
 *     
 */
export interface Observation extends QuantitativeValue, Intangible {

/**
 * The measuredProperty of an [[Observation]], typically via its [[StatisticalVariable]]. There are various kinds of applicable [[Property]]: a schema.org property, a property from other RDF-compatible systems, e.g. W3C RDF Data Cube, Data Commons, Wikidata, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties).
 */
measuredProperty?: Property | Property[]

/**
 * A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].
 */
measurementMethod?: URL | URL[] | DefinedTerm | DefinedTerm[] | MeasurementMethodEnum | MeasurementMethodEnum[] | Text | Text[]

/**
 * Provides additional qualification to an observation. For example, a GDP observation measures the Nominal value.
 */
measurementQualifier?: Enumeration | Enumeration[]

/**
 * The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue, or more explicitly as a [[StatisticalVariable]].
 */
variableMeasured?: StatisticalVariable | StatisticalVariable[] | Property | Property[] | Text | Text[] | PropertyValue | PropertyValue[]

/**
 * Identifies the denominator variable when an observation represents a ratio or percentage.
 */
measurementDenominator?: StatisticalVariable | StatisticalVariable[]

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