import type { LocalBusiness } from './LocalBusiness.ts'


/**
 * A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.
 * \nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 */
export interface LegalService extends LocalBusiness {

}