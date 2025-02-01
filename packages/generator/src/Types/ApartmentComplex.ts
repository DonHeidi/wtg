import type { Residence } from './Residence.ts'

import type { Text } from './Text.ts'

import type { Boolean } from './Boolean.ts'

import type { Number } from './Number.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { URL } from './URL.ts'


/**
 * Residence type: Apartment complex.
 */
export interface ApartmentComplex extends Residence {

/**
 * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
 */
petsAllowed?: Text | Text[] | Boolean | Boolean[]

/**
 * The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]].
 */
numberOfBedrooms?: Number | Number[] | QuantitativeValue | QuantitativeValue[]

/**
 * Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]].
 */
numberOfAvailableAccommodationUnits?: QuantitativeValue | QuantitativeValue[]

/**
 * Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]].
 */
numberOfAccommodationUnits?: QuantitativeValue | QuantitativeValue[]

/**
 * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
 */
tourBookingPage?: URL | URL[]

}