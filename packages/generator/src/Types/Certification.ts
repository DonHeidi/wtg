import type { CreativeWork } from './CreativeWork.ts'

import type { Organization } from './Organization.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { Thing } from './Thing.ts'

import type { Date } from './Date.ts'

import type { DateTime } from './DateTime.ts'

import type { URL } from './URL.ts'

import type { ImageObject } from './ImageObject.ts'


/**
 * A Certification is an official and authoritative statement about a subject, for example a product, service, person, or organization. A certification is typically issued by an indendent certification body, for example a professional organization or government. It formally attests certain characteristics about the subject, for example Organizations can be ISO certified, Food products can be certified Organic or Vegan, a Person can be a certified professional, a Place can be certified for food processing. There are certifications for many domains: regulatory, organizational, recycling, food, efficiency, educational, ecological, etc. A certification is a form of credential, as are accreditations and licenses. Mapped from the [gs1:CertificationDetails](https://www.gs1.org/voc/CertificationDetails) class in the GS1 Web Vocabulary.
 */
export interface Certification extends CreativeWork {

/**
 * The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].
 */
issuedBy?: Organization | Organization[]

/**
 * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
 */
hasMeasurement?: QuantitativeValue | QuantitativeValue[]

/**
 * The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. 
 */
validIn?: AdministrativeArea | AdministrativeArea[]

/**
 * The subject matter of the content.
 */
about?: Thing | Thing[]

/**
 * Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued.
 */
datePublished?: Date | Date[] | DateTime | DateTime[]

/**
 * An associated logo.
 */
logo?: URL | URL[] | ImageObject | ImageObject[]

/**
 * The date when the item becomes valid.
 */
validFrom?: DateTime | DateTime[] | Date | Date[]

/**
 * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired.
 */
expires?: Date | Date[] | DateTime | DateTime[]

}