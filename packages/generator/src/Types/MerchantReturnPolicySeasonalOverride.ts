import type { Intangible } from './Intangible.ts'

import type { ReturnFeesEnumeration } from './ReturnFeesEnumeration.ts'

import type { ReturnMethodEnumeration } from './ReturnMethodEnumeration.ts'

import type { RefundTypeEnumeration } from './RefundTypeEnumeration.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { Integer } from './Integer.ts'

import type { MerchantReturnEnumeration } from './MerchantReturnEnumeration.ts'

import type { Number } from './Number.ts'


/**
 * A seasonal override of a return policy, for example used for holidays.
 */
export interface MerchantReturnPolicySeasonalOverride extends Intangible {

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
 * Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].
 */
returnShippingFeesAmount?: MonetaryAmount | MonetaryAmount[]

/**
 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
startDate?: DateTime | DateTime[] | Date | Date[]

/**
 * Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].
 */
merchantReturnDays?: Date | Date[] | Integer | Integer[] | DateTime | DateTime[]

/**
 * Specifies an applicable return policy (from an enumeration).
 */
returnPolicyCategory?: MerchantReturnEnumeration | MerchantReturnEnumeration[]

/**
 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
endDate?: Date | Date[] | DateTime | DateTime[]

/**
 * Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer.
 */
restockingFee?: MonetaryAmount | MonetaryAmount[] | Number | Number[]

}