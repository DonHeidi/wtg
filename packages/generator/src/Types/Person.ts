import type { Thing } from './Thing.ts'

import type { InteractionCounter } from './InteractionCounter.ts'

import type { EducationalOccupationalCredential } from './EducationalOccupationalCredential.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { URL } from './URL.ts'

import type { Text } from './Text.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { Language } from './Language.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { Grant } from './Grant.ts'

import type { OfferCatalog } from './OfferCatalog.ts'

import type { Certification } from './Certification.ts'

import type { Place } from './Place.ts'

import type { Organization } from './Organization.ts'

import type { ProgramMembership } from './ProgramMembership.ts'

import type { MemberProgramTier } from './MemberProgramTier.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { Brand } from './Brand.ts'

import type { OwnershipInfo } from './OwnershipInfo.ts'

import type { Product } from './Product.ts'

import type { Distance } from './Distance.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { GenderType } from './GenderType.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'


/**
 * A person (alive, dead, undead, or fictional).
 */
export interface Person extends Thing {

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 */
interactionStatistic?: InteractionCounter | InteractionCounter[]

/**
 * A credential awarded to the Person or Organization.
 */
hasCredential?: EducationalOccupationalCredential | EducationalOccupationalCredential[]

/**
 * A contact point for a person or organization.
 */
contactPoints?: ContactPoint | ContactPoint[]

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 */
knowsAbout?: URL | URL[] | Thing | Thing[] | Text | Text[]

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
 * 
 * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
 * 
 */
publishingPrinciples?: URL | URL[] | CreativeWork | CreativeWork[]

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 */
isicV4?: Text | Text[]

/**
 * The telephone number.
 */
telephone?: Text | Text[]

/**
 * The Value-added Tax ID of the organization or person.
 */
vatID?: Text | Text[]

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 */
knowsLanguage?: Text | Text[] | Language | Language[]

/**
 * An award won by or for this item.
 */
award?: Text | Text[]

/**
 * Physical address of the item.
 */
address?: Text | Text[] | PostalAddress | PostalAddress[]

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 */
callSign?: Text | Text[]

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 */
funding?: Grant | Grant[]

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 */
hasOfferCatalog?: OfferCatalog | OfferCatalog[]

/**
 * Certification information about a product, organization, service, place, or person.
 */
hasCertification?: Certification | Certification[]

/**
 * Points-of-Sales operated by the organization or person.
 */
hasPOS?: Place | Place[]

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 */
funder?: Person | Person[] | Organization | Organization[]

/**
 * The fax number.
 */
faxNumber?: Text | Text[]

/**
 * Email address.
 */
email?: Text | Text[]

/**
 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
 */
naics?: Text | Text[]

/**
 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
 */
memberOf?: ProgramMembership | ProgramMembership[] | Organization | Organization[] | MemberProgramTier | MemberProgramTier[]

/**
 * A contact point for a person or organization.
 */
contactPoint?: ContactPoint | ContactPoint[]

/**
 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 */
taxID?: Text | Text[]

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 */
skills?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 */
brand?: Organization | Organization[] | Brand | Brand[]

/**
 * Products owned by the organization or person.
 */
owns?: OwnershipInfo | OwnershipInfo[] | Product | Product[]

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 */
globalLocationNumber?: Text | Text[]

/**
 * The height of the item.
 */
height?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 */
gender?: GenderType | GenderType[] | Text | Text[]

/**
 * Awards won by or for this item.
 */
awards?: Text | Text[]

/**
 * The weight of the product or person.
 */
weight?: QuantitativeValue | QuantitativeValue[]

/**
 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
 */
duns?: Text | Text[]

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 */
sponsor?: Person | Person[] | Organization | Organization[]

/**
 * A pointer to products or services offered by the organization or person.
 */
makesOffer?: Offer | Offer[]

/**
 * A pointer to products or services sought by the organization or person (demand).
 */
seeks?: Demand | Demand[]

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 */
agentInteractionStatistic?: InteractionCounter | InteractionCounter[]

}