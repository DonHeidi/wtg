import type { TransferAction } from './TransferAction.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Number } from './Number.ts'


/**
 * The act of transferring money from one place to another place. This may occur electronically or physically.
 */
export interface MoneyTransfer extends TransferAction {

/**
 * The amount of money.
 */
amount?: MonetaryAmount | MonetaryAmount[] | Number | Number[]

}