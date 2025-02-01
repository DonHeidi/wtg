import type { Intangible } from './Intangible.ts'

import type { PropertyValue } from './PropertyValue.ts'

import type { ReturnFeesEnumeration } from './ReturnFeesEnumeration.ts'

import type { ReturnMethodEnumeration } from './ReturnMethodEnumeration.ts'

import type { RefundTypeEnumeration } from './RefundTypeEnumeration.ts'

import type { MemberProgramTier } from './MemberProgramTier.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { OfferItemCondition } from './OfferItemCondition.ts'

import type { Date } from './Date.ts'

import type { Integer } from './Integer.ts'

import type { DateTime } from './DateTime.ts'

import type { MerchantReturnEnumeration } from './MerchantReturnEnumeration.ts'

import type { Number } from './Number.ts'


/**
 * A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]], [[Product]], or [[Offer]].
 */
export interface MerchantReturnPolicy extends Intangible {

/**
 * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
 * \nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
 * 
 */
additionalProperty?: PropertyValue | PropertyValue[]

/**
 * The type of return fees for purchased products (for any return reason).
 */
returnFees?: ReturnFeesEnumeration | ReturnFeesEnumeration[]

/**
 * The type of return method offered, specified from an enumeration.
 */
returnMethod?: ReturnMethodEnumeration | ReturnMethodEnumeration[]

/**
 * A refund type, from an enumerated list.
 */
refundType?: RefundTypeEnumeration | RefundTypeEnumeration[]

/**
 * The membership program tier an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.
 */
validForMemberTier?: MemberProgramTier | MemberProgramTier[]

/**
 * Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].
 */
returnShippingFeesAmount?: MonetaryAmount | MonetaryAmount[]

/**
 * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
 */
itemCondition?: OfferItemCondition | OfferItemCondition[]

/**
 * Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].
 */
merchantReturnDays?: Date | Date[] | Integer | Integer[] | DateTime | DateTime[]

/**
 * Specifies an applicable return policy (from an enumeration).
 */
returnPolicyCategory?: MerchantReturnEnumeration | MerchantReturnEnumeration[]

/**
 * Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer.
 */
restockingFee?: MonetaryAmount | MonetaryAmount[] | Number | Number[]

}