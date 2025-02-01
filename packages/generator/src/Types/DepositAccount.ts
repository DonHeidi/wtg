import type { BankAccount } from './BankAccount.ts'
import type { InvestmentOrDeposit } from './InvestmentOrDeposit.ts'


/**
 * A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.
 */
export interface DepositAccount extends BankAccount, InvestmentOrDeposit {

}