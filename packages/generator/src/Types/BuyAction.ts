import type { TradeAction } from './TradeAction.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { WarrantyPromise } from './WarrantyPromise.ts'


/**
 * The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 */
export interface BuyAction extends TradeAction {

/**
 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
 */
seller?: Person | Person[] | Organization | Organization[]

/**
 * The warranty promise(s) included in the offer.
 */
warrantyPromise?: WarrantyPromise | WarrantyPromise[]

}