import type { Offer } from './Offer.ts'


/**
 * An [[OfferForPurchase]] in Schema.org represents an [[Offer]] to sell something, i.e. an [[Offer]] whose
 *   [[businessFunction]] is [sell](http://purl.org/goodrelations/v1#Sell.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
 *   background on the underlying concepts.
 *   
 */
export interface OfferForPurchase extends Offer {

}