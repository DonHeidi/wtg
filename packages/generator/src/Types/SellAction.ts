import type { TradeAction } from './TradeAction.ts'

import type { WarrantyPromise } from './WarrantyPromise.ts'


/**
 * The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 */
export interface SellAction extends TradeAction {

/**
 * The warranty promise(s) included in the offer.
 */
warrantyPromise?: WarrantyPromise | WarrantyPromise[]

}