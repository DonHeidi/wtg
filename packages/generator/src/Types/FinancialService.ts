import type { LocalBusiness } from './LocalBusiness.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'


/**
 * Financial services business.
 */
export interface FinancialService extends LocalBusiness {

/**
 * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
 */
feesAndCommissionsSpecification?: Text | Text[] | URL | URL[]

}