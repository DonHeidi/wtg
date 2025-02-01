import type { Thing } from './Thing.ts'

import type { PropertyValue } from './PropertyValue.ts'

import type { Text } from './Text.ts'

import type { Service } from './Service.ts'

import type { Date } from './Date.ts'

import type { URL } from './URL.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { Grant } from './Grant.ts'

import type { Certification } from './Certification.ts'

import type { Boolean } from './Boolean.ts'

import type { DefinedTerm } from './DefinedTerm.ts'

import type { SizeSpecification } from './SizeSpecification.ts'

import type { ImageObject } from './ImageObject.ts'

import type { AdultOrientedEnumeration } from './AdultOrientedEnumeration.ts'

import type { ItemList } from './ItemList.ts'

import type { WebContent } from './WebContent.ts'

import type { ListItem } from './ListItem.ts'

import type { Organization } from './Organization.ts'

import type { Brand } from './Brand.ts'

import type { MerchantReturnPolicy } from './MerchantReturnPolicy.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { Review } from './Review.ts'

import type { Country } from './Country.ts'

import type { Offer } from './Offer.ts'

import type { Demand } from './Demand.ts'

import type { Distance } from './Distance.ts'

import type { OfferItemCondition } from './OfferItemCondition.ts'

import type { ProductModel } from './ProductModel.ts'

import type { ProductGroup } from './ProductGroup.ts'

import type { AggregateRating } from './AggregateRating.ts'

import type { Audience } from './Audience.ts'


/**
 * Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
 */
export interface Product extends Thing {

/**
 * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
 * \nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
 * 
 */
additionalProperty?: PropertyValue | PropertyValue[]

/**
 * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
 * 
 * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
 *     
 */
mobileUrl?: Text | Text[]

/**
 * A pointer to another, functionally similar product (or multiple products).
 */
isSimilarTo?: Product | Product[] | Service | Service[]

/**
 * The date of production of the item, e.g. vehicle.
 */
productionDate?: Date | Date[]

/**
 * A material that something is made from, e.g. leather, wool, cotton, paper.
 */
material?: URL | URL[] | Product | Product[] | Text | Text[]

/**
 * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
 */
hasMeasurement?: QuantitativeValue | QuantitativeValue[]

/**
 * An award won by or for this item.
 */
award?: Text | Text[]

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 */
funding?: Grant | Grant[]

/**
 * Certification information about a product, organization, service, place, or person.
 */
hasCertification?: Certification | Certification[]

/**
 * Indicates whether this content is family friendly.
 */
isFamilyFriendly?: Boolean | Boolean[]

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 */
keywords?: URL | URL[] | DefinedTerm | DefinedTerm[] | Text | Text[]

/**
 * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
 */
size?: QuantitativeValue | QuantitativeValue[] | SizeSpecification | SizeSpecification[] | Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * An associated logo.
 */
logo?: URL | URL[] | ImageObject | ImageObject[]

/**
 * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
 * 
 * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
 * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
 */
asin?: Text | Text[] | URL | URL[]

/**
 * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 */
gtin13?: Text | Text[]

/**
 * Used to tag an item to be intended or suitable for consumption or use by adults only.
 */
hasAdultConsideration?: AdultOrientedEnumeration | AdultOrientedEnumeration[]

/**
 * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
 * 
 * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
 * 
 * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
 */
positiveNotes?: ItemList | ItemList[] | WebContent | WebContent[] | ListItem | ListItem[] | Text | Text[]

/**
 * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
 */
mpn?: Text | Text[]

/**
 * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
 */
pattern?: Text | Text[] | DefinedTerm | DefinedTerm[]

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 */
brand?: Organization | Organization[] | Brand | Brand[]

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 */
hasMerchantReturnPolicy?: MerchantReturnPolicy | MerchantReturnPolicy[]

/**
 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 */
category?: Thing | Thing[] | PhysicalActivityCategory | PhysicalActivityCategory[] | CategoryCode | CategoryCode[] | Text | Text[] | URL | URL[]

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 */
hasGS1DigitalLink?: URL | URL[]

/**
 * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 */
gtin8?: Text | Text[]

/**
 * Review of the item.
 */
reviews?: Review | Review[]

/**
 * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes.
 * 
 * A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties.
 * 
 * The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) expresses GTINs as URLs (URIs, IRIs, etc.).
 * Digital Links should be populated into the [[hasGS1DigitalLink]] attribute.
 * 
 * Note also that this is a definition for how to include GTINs in Schema.org data, and not a definition of GTINs in general - see the GS1 documentation for authoritative details.
 */
gtin?: Text | Text[] | URL | URL[]

/**
 * A pointer to another, somehow related product (or multiple products).
 */
isRelatedTo?: Product | Product[] | Service | Service[]

/**
 * A review of the item.
 */
review?: Review | Review[]

/**
 * The country of origin of something, including products as well as creative  works such as movie and TV content.
 * 
 * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
 * 
 * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
 */
countryOfOrigin?: Country | Country[]

/**
 * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 */
gtin14?: Text | Text[]

/**
 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 *       
 */
offers?: Offer | Offer[] | Demand | Demand[]

/**
 * The height of the item.
 */
height?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
 */
itemCondition?: OfferItemCondition | OfferItemCondition[]

/**
 * Awards won by or for this item.
 */
awards?: Text | Text[]

/**
 * The width of the item.
 */
width?: Distance | Distance[] | QuantitativeValue | QuantitativeValue[]

/**
 * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
 */
isVariantOf?: ProductModel | ProductModel[] | ProductGroup | ProductGroup[]

/**
 * A slogan or motto associated with the item.
 */
slogan?: Text | Text[]

/**
 * The weight of the product or person.
 */
weight?: QuantitativeValue | QuantitativeValue[]

/**
 * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 */
gtin12?: Text | Text[]

/**
 * The depth of the item.
 */
depth?: QuantitativeValue | QuantitativeValue[] | Distance | Distance[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

/**
 * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry 
 * 
 * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions 
 * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
 * 
 * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
 */
negativeNotes?: WebContent | WebContent[] | ItemList | ItemList[] | ListItem | ListItem[] | Text | Text[]

/**
 * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
 */
sku?: Text | Text[]

/**
 * The date the item, e.g. vehicle, was purchased by the current owner.
 */
purchaseDate?: Date | Date[]

/**
 * An intended audience, i.e. a group for whom something was created.
 */
audience?: Audience | Audience[]

}