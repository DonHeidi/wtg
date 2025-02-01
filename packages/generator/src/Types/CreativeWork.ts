import type { Thing } from './Thing.ts'

import type { InteractionCounter } from './InteractionCounter.ts'

import type { Organization } from './Organization.ts'

import type { Person } from './Person.ts'

import type { URL } from './URL.ts'

import type { AlignmentObject } from './AlignmentObject.ts'

import type { Product } from './Product.ts'

import type { Text } from './Text.ts'

import type { MediaObject } from './MediaObject.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { Grant } from './Grant.ts'

import type { Integer } from './Integer.ts'

import type { Date } from './Date.ts'

import type { DateTime } from './DateTime.ts'

import type { Boolean } from './Boolean.ts'

import type { Comment } from './Comment.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { SizeSpecification } from './SizeSpecification.ts'

import type { Review } from './Review.ts'

import type { Claim } from './Claim.ts'

import type { Country } from './Country.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'

import type { AggregateRating } from './AggregateRating.ts'

import type { Language } from './Language.ts'

import type { Audience } from './Audience.ts'


/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 */
export interface CreativeWork extends Thing {

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 */
interactionStatistic?: InteractionCounter | InteractionCounter[]

/**
 * A secondary contributor to the CreativeWork or Event.
 */
contributor?: Organization | Organization[] | Person | Person[]

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
 * 
 * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
 * 
 */
publishingPrinciples?: URL | URL[] | CreativeWork | CreativeWork[]

/**
 * An alignment to an established educational framework.
 * 
 * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 */
educationalAlignment?: AlignmentObject | AlignmentObject[]

/**
 * A material that something is made from, e.g. leather, wool, cotton, paper.
 */
material?: URL | URL[] | Product | Product[] | Text | Text[]

/**
 * A media object that encodes this CreativeWork. This property is a synonym for encoding.
 */
associatedMedia?: MediaObject | MediaObject[]

/**
 * An award won by or for this item.
 */
award?: Text | Text[]

/**
 * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
 */
learningResourceType?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.
 * 
 * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
 * 
 * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
 */
encodingFormat?: URL | URL[] | Text | Text[]

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 */
funding?: Grant | Grant[]

/**
 * The position of an item in a series or sequence of items.
 */
position?: Text | Text[] | Integer | Integer[]

/**
 * The subject matter of the content.
 */
about?: Thing | Thing[]

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 */
funder?: Person | Person[] | Organization | Organization[]

/**
 * Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued.
 */
datePublished?: Date | Date[] | DateTime | DateTime[]

/**
 * Indicates whether this content is family friendly.
 */
isFamilyFriendly?: Boolean | Boolean[]

/**
 * Comments, typically from users.
 */
comment?: Comment | Comment[]

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 */
keywords?: URL | URL[] | DefinedTerm | DefinedTerm[] | Text | Text[]

/**
 * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
 */
size?: QuantitativeValue | QuantitativeValue[] | SizeSpecification | SizeSpecification[] | Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * A flag to signal that the item, event, or place is accessible for free.
 */
isAccessibleForFree?: Boolean | Boolean[]

/**
 * The date on which the CreativeWork was created or the item was added to a DataFeed.
 */
dateCreated?: DateTime | DateTime[] | Date | Date[]

/**
 * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
 */
pattern?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The typical expected age range, e.g. '7-9', '11-'.
 */
typicalAgeRange?: Text | Text[]

/**
 * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
 */
translator?: Person | Person[] | Organization | Organization[]

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 */
author?: Person | Person[] | Organization | Organization[]

/**
 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
 */
educationalLevel?: Text | Text[] | URL | URL[] | DefinedTerm | DefinedTerm[]

/**
 * Genre of the creative work, broadcast channel or group.
 */
genre?: Text | Text[] | URL | URL[]

/**
 * Review of the item.
 */
reviews?: Review | Review[]

/**
 * Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].
 */
interpretedAsClaim?: Claim | Claim[]

/**
 * A review of the item.
 */
review?: Review | Review[]

/**
 * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
 */
educationalUse?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The country of origin of something, including products as well as creative  works such as movie and TV content.
 * 
 * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
 * 
 * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
 */
countryOfOrigin?: Country | Country[]

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
 * Awards won by or for this item.
 */
awards?: Text | Text[]

/**
 * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
 */
assesses?: DefinedTerm | DefinedTerm[] | Text | Text[]

/**
 * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
 */
teaches?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 */
sponsor?: Person | Person[] | Organization | Organization[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

/**
 * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
 */
creator?: Person | Person[] | Organization | Organization[]

/**
 * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired.
 */
expires?: Date | Date[] | DateTime | DateTime[]

/**
 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 */
inLanguage?: Language | Language[] | Text | Text[]

/**
 * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
 */
dateModified?: Date | Date[] | DateTime | DateTime[]

/**
 * An intended audience, i.e. a group for whom something was created.
 */
audience?: Audience | Audience[]

}