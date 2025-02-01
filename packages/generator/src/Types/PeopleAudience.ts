import type { Audience } from './Audience.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { GenderType } from './GenderType.ts'

import type { Text } from './Text.ts'

import type { MedicalCondition } from './MedicalCondition.ts'


/**
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 */
export interface PeopleAudience extends Audience {

/**
 * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
 */
suggestedAge?: QuantitativeValue | QuantitativeValue[]

/**
 * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
 */
suggestedGender?: GenderType | GenderType[] | Text | Text[]

/**
 * Specifying the health condition(s) of a patient, medical study, or other target audience.
 */
healthCondition?: MedicalCondition | MedicalCondition[]

/**
 * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
 */
suggestedMeasurement?: QuantitativeValue | QuantitativeValue[]

}