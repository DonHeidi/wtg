import type { LoanOrCredit } from './LoanOrCredit.ts'
import type { PaymentCard } from './PaymentCard.ts'


/**
 * A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.
 * \nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA
 *        
 */
export interface CreditCard extends LoanOrCredit, PaymentCard {

}