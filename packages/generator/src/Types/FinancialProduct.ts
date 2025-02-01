import type { Service } from './Service.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'


/**
 * A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
 */
export interface FinancialProduct extends Service {

/**
 * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
 */
feesAndCommissionsSpecification?: Text | Text[] | URL | URL[]

}