import type { Thing } from './Thing.ts'

import type { InteractionCounter } from './InteractionCounter.ts'

import type { EducationalOccupationalCredential } from './EducationalOccupationalCredential.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { URL } from './URL.ts'

import type { Text } from './Text.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { Person } from './Person.ts'

import type { Language } from './Language.ts'

import type { PostalAddress } from './PostalAddress.ts'

import type { Grant } from './Grant.ts'

import type { OfferCatalog } from './OfferCatalog.ts'

import type { Certification } from './Certification.ts'

import type { Place } from './Place.ts'

import type { Event } from './Event.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { ProgramMembership } from './ProgramMembership.ts'

import type { MemberProgramTier } from './MemberProgramTier.ts'

import type { ImageObject } from './ImageObject.ts'

import type { GeoShape } from './GeoShape.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { VirtualLocation } from './VirtualLocation.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Brand } from './Brand.ts'

import type { MerchantReturnPolicy } from './MerchantReturnPolicy.ts'

import type { OwnershipInfo } from './OwnershipInfo.ts'

import type { Product } from './Product.ts'

import type { PaymentMethod } from './PaymentMethod.ts'

import type { LoanOrCredit } from './LoanOrCredit.ts'

import type { Review } from './Review.ts'

import type { AboutPage } from './AboutPage.ts'

import type { Article } from './Article.ts'

import type { Offer } from './Offer.ts'

import type { AggregateRating } from './AggregateRating.ts'

import type { Demand } from './Demand.ts'


/**
 * An organization such as a school, NGO, corporation, club, etc.
 */
export interface Organization extends Thing {

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
 * Alumni of an organization.
 */
alumni?: Person | Person[]

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 */
isicV4?: Text | Text[]

/**
 * The telephone number.
 */
telephone?: Text | Text[]

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 */
diversityPolicy?: CreativeWork | CreativeWork[] | URL | URL[]

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
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 */
ethicsPolicy?: URL | URL[] | CreativeWork | CreativeWork[]

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
 * Upcoming or past event associated with this place, organization, or action.
 */
event?: Event | Event[]

/**
 * Upcoming or past events associated with this place or organization.
 */
events?: Event | Event[]

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 */
keywords?: URL | URL[] | DefinedTerm | DefinedTerm[] | Text | Text[]

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
 * An associated logo.
 */
logo?: URL | URL[] | ImageObject | ImageObject[]

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 */
skills?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The geographic area where a service or offered item is provided.
 */
areaServed?: Text | Text[] | Place | Place[] | GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[]

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 */
location?: Text | Text[] | Place | Place[] | VirtualLocation | VirtualLocation[] | PostalAddress | PostalAddress[]

/**
 * The geographic area where the service is provided.
 */
serviceArea?: GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[] | Place | Place[]

/**
 * The number of employees in an organization, e.g. business.
 */
numberOfEmployees?: QuantitativeValue | QuantitativeValue[]

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 */
unnamedSourcesPolicy?: CreativeWork | CreativeWork[] | URL | URL[]

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 */
brand?: Organization | Organization[] | Brand | Brand[]

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 */
hasMerchantReturnPolicy?: MerchantReturnPolicy | MerchantReturnPolicy[]

/**
 * Products owned by the organization or person.
 */
owns?: OwnershipInfo | OwnershipInfo[] | Product | Product[]

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 */
correctionsPolicy?: CreativeWork | CreativeWork[] | URL | URL[]

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 */
acceptedPaymentMethod?: Text | Text[] | PaymentMethod | PaymentMethod[] | LoanOrCredit | LoanOrCredit[]

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 */
hasGS1DigitalLink?: URL | URL[]

/**
 * Review of the item.
 */
reviews?: Review | Review[]

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 */
globalLocationNumber?: Text | Text[]

/**
 * A review of the item.
 */
review?: Review | Review[]

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 */
ownershipFundingInfo?: CreativeWork | CreativeWork[] | Text | Text[] | URL | URL[] | AboutPage | AboutPage[]

/**
 * Awards won by or for this item.
 */
awards?: Text | Text[]

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 */
diversityStaffingReport?: URL | URL[] | Article | Article[]

/**
 * A slogan or motto associated with the item.
 */
slogan?: Text | Text[]

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 */
member?: Person | Person[] | Organization | Organization[]

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
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 */
actionableFeedbackPolicy?: URL | URL[] | CreativeWork | CreativeWork[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

/**
 * A pointer to products or services sought by the organization or person (demand).
 */
seeks?: Demand | Demand[]

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 */
agentInteractionStatistic?: InteractionCounter | InteractionCounter[]

/**
 * A member of this organization.
 */
members?: Organization | Organization[] | Person | Person[]

}