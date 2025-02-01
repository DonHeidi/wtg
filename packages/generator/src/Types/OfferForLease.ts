import type { Offer } from './Offer.ts'


/**
 * An [[OfferForLease]] in Schema.org represents an [[Offer]] to lease out something, i.e. an [[Offer]] whose
 *   [[businessFunction]] is [lease out](http://purl.org/goodrelations/v1#LeaseOut.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
 *   background on the underlying concepts.
 *   
 */
export interface OfferForLease extends Offer {

}