import type { Place } from './Place.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Text } from './Text.ts'

import type { Boolean } from './Boolean.ts'

import type { Number } from './Number.ts'

import type { Duration } from './Duration.ts'

import type { BedType } from './BedType.ts'

import type { BedDetails } from './BedDetails.ts'

import type { Integer } from './Integer.ts'

import type { FloorPlan } from './FloorPlan.ts'

import type { LocationFeatureSpecification } from './LocationFeatureSpecification.ts'

import type { URL } from './URL.ts'


/**
 * An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
 * For more specific types of accommodations not defined in schema.org, one can use [[additionalType]] with external vocabularies.
 * <br /><br />
 * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * 
 */
export interface Accommodation extends Place {

/**
 * The size of the accommodation, e.g. in square meter or squarefoot.
 * Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard.
 */
floorSize?: QuantitativeValue | QuantitativeValue[]

/**
 * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
 */
petsAllowed?: Text | Text[] | Boolean | Boolean[]

/**
 * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
 * Typical unit code(s): C62 for person.
 */
occupancy?: QuantitativeValue | QuantitativeValue[]

/**
 * The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]].
 */
numberOfBedrooms?: Number | Number[] | QuantitativeValue | QuantitativeValue[]

/**
 * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
 */
leaseLength?: QuantitativeValue | QuantitativeValue[] | Duration | Duration[]

/**
 * The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
 *       If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
 */
bed?: BedType | BedType[] | BedDetails | BedDetails[] | Text | Text[]

/**
 * The total integer number of bathrooms in some [[Accommodation]], following real estate conventions as [documented in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field): "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also [[numberOfRooms]].
 */
numberOfBathroomsTotal?: Integer | Integer[]

/**
 * A floorplan of some [[Accommodation]].
 */
accommodationFloorPlan?: FloorPlan | FloorPlan[]

/**
 * Number of full bathrooms - The total number of full and ¾ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsFull field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field).
 */
numberOfFullBathrooms?: Number | Number[]

/**
 * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
 * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
 */
numberOfRooms?: QuantitativeValue | QuantitativeValue[] | Number | Number[]

/**
 * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
 */
amenityFeature?: LocationFeatureSpecification | LocationFeatureSpecification[]

/**
 * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
 */
tourBookingPage?: URL | URL[]

/**
 * Number of partial bathrooms - The total number of half and ¼ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsPartial field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field). 
 */
numberOfPartialBathrooms?: Number | Number[]

}