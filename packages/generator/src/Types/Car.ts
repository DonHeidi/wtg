import type { Vehicle } from './Vehicle.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Text } from './Text.ts'


/**
 * A car is a wheeled, self-powered motor vehicle used for transportation.
 */
export interface Car extends Vehicle {

/**
 * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
 * \nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
 */
roofLoad?: QuantitativeValue | QuantitativeValue[]

/**
 * The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards.
 */
acrissCode?: Text | Text[]

}