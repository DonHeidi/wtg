import type { Intangible } from './Intangible.ts'

import type { DayOfWeek } from './DayOfWeek.ts'

import type { MonetaryAmountDistribution } from './MonetaryAmountDistribution.ts'

import type { Text } from './Text.ts'

import type { EducationalOccupationalCredential } from './EducationalOccupationalCredential.ts'

import type { URL } from './URL.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { Integer } from './Integer.ts'

import type { StructuredValue } from './StructuredValue.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { DefinedTerm } from './DefinedTerm.ts'


/**
 * A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree).
 */
export interface EducationalOccupationalProgram extends Intangible {

/**
 * The day of the week for which these opening hours are valid.
 */
dayOfWeek?: DayOfWeek | DayOfWeek[]

/**
 * The estimated salary earned while in the program.
 */
trainingSalary?: MonetaryAmountDistribution | MonetaryAmountDistribution[]

/**
 * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
 */
occupationalCredentialAwarded?: Text | Text[] | EducationalOccupationalCredential | EducationalOccupationalCredential[] | URL | URL[]

/**
 * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
 * 
 * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
 */
occupationalCategory?: CategoryCode | CategoryCode[] | Text | Text[]

/**
 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
startDate?: DateTime | DateTime[] | Date | Date[]

/**
 * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
 */
numberOfCredits?: Integer | Integer[] | StructuredValue | StructuredValue[]

/**
 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 *       
 */
offers?: Offer | Offer[] | Demand | Demand[]

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 */
provider?: Person | Person[] | Organization | Organization[]

/**
 * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
 */
educationalCredentialAwarded?: Text | Text[] | EducationalOccupationalCredential | EducationalOccupationalCredential[] | URL | URL[]

/**
 * A financial aid type or program which students may use to pay for tuition or fees associated with the program.
 */
financialAidEligible?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 */
endDate?: Date | Date[] | DateTime | DateTime[]

}