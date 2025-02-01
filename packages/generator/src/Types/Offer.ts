import type { Intangible } from './Intangible.ts'

import type { MenuItem } from './MenuItem.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { Service } from './Service.ts'

import type { Product } from './Product.ts'

import type { Trip } from './Trip.ts'

import type { Event } from './Event.ts'

import type { AggregateOffer } from './AggregateOffer.ts'

import type { Date } from './Date.ts'

import type { Time } from './Time.ts'

import type { DateTime } from './DateTime.ts'

import type { QuantitativeValue } from './QuantitativeValue.ts'

import type { PropertyValue } from './PropertyValue.ts'

import type { Text } from './Text.ts'

import type { Number } from './Number.ts'

import type { ItemAvailability } from './ItemAvailability.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'

import type { Place } from './Place.ts'

import type { GeoShape } from './GeoShape.ts'

import type { MemberProgramTier } from './MemberProgramTier.ts'

import type { Boolean } from './Boolean.ts'

import type { Duration } from './Duration.ts'

import type { BusinessEntityType } from './BusinessEntityType.ts'

import type { WarrantyPromise } from './WarrantyPromise.ts'

import type { URL } from './URL.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { AdultOrientedEnumeration } from './AdultOrientedEnumeration.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { PriceSpecification } from './PriceSpecification.ts'

import type { MerchantReturnPolicy } from './MerchantReturnPolicy.ts'

import type { TypeAndQuantityNode } from './TypeAndQuantityNode.ts'

import type { PaymentMethod } from './PaymentMethod.ts'

import type { LoanOrCredit } from './LoanOrCredit.ts'

import type { Thing } from './Thing.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { Review } from './Review.ts'

import type { BusinessFunction } from './BusinessFunction.ts'

import type { OfferItemCondition } from './OfferItemCondition.ts'

import type { AggregateRating } from './AggregateRating.ts'


/**
 * An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * \nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/).
 */
export interface Offer extends Intangible {

/**
 * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 */
itemOffered?: MenuItem | MenuItem[] | CreativeWork | CreativeWork[] | Service | Service[] | Product | Product[] | Trip | Trip[] | Event | Event[] | AggregateOffer | AggregateOffer[]

/**
 * The beginning of the availability of the product or service included in the offer.
 */
availabilityStarts?: Date | Date[] | Time | Time[] | DateTime | DateTime[]

/**
 * The duration for which the given offer is valid.
 */
eligibleDuration?: QuantitativeValue | QuantitativeValue[]

/**
 * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
 * \nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
 * 
 */
additionalProperty?: PropertyValue | PropertyValue[]

/**
 * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
 * \nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '
} in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
 *       
 */
price?: Text | Text[] | Number | Number[]

/**
 * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
 * 
 * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
 *     
 */
mobileUrl?: Text | Text[]

/**
 * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
 */
availability?: ItemAvailability | ItemAvailability[]

/**
 * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
 */
serialNumber?: Text | Text[]

/**
 * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
 */
hasMeasurement?: QuantitativeValue | QuantitativeValue[]

/**
 * The delivery method(s) available for this offer.
 */
availableDeliveryMethod?: DeliveryMethod | DeliveryMethod[]

/**
 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
 * \nSee also [[eligibleRegion]].
 *       
 */
ineligibleRegion?: Place | Place[] | Text | Text[] | GeoShape | GeoShape[]

/**
 * The membership program tier an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.
 */
validForMemberTier?: MemberProgramTier | MemberProgramTier[]

/**
 * Indicates whether this content is family friendly.
 */
isFamilyFriendly?: Boolean | Boolean[]

/**
 * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
 */
leaseLength?: QuantitativeValue | QuantitativeValue[] | Duration | Duration[]

/**
 * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
 */
eligibleQuantity?: QuantitativeValue | QuantitativeValue[]

/**
 * The type(s) of customers for which the given offer is valid.
 */
eligibleCustomerType?: BusinessEntityType | BusinessEntityType[]

/**
 * The warranty promise(s) included in the offer.
 */
warranty?: WarrantyPromise | WarrantyPromise[]

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
 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
 */
seller?: Person | Person[] | Organization | Organization[]

/**
 * Used to tag an item to be intended or suitable for consumption or use by adults only.
 */
hasAdultConsideration?: AdultOrientedEnumeration | AdultOrientedEnumeration[]

/**
 * The geographic area where a service or offered item is provided.
 */
areaServed?: Text | Text[] | Place | Place[] | GeoShape | GeoShape[] | AdministrativeArea | AdministrativeArea[]

/**
 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 */
validThrough?: DateTime | DateTime[] | Date | Date[]

/**
 * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
 */
mpn?: Text | Text[]

/**
 * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
 */
priceSpecification?: PriceSpecification | PriceSpecification[]

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 */
hasMerchantReturnPolicy?: MerchantReturnPolicy | MerchantReturnPolicy[]

/**
 * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
 */
includesObject?: TypeAndQuantityNode | TypeAndQuantityNode[]

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 */
acceptedPaymentMethod?: Text | Text[] | PaymentMethod | PaymentMethod[] | LoanOrCredit | LoanOrCredit[]

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
 * A review of the item.
 */
review?: Review | Review[]

/**
 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.
 * \nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
 */
priceCurrency?: Text | Text[]

/**
 * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 */
gtin14?: Text | Text[]

/**
 * The current approximate inventory level for the item or items.
 */
inventoryLevel?: QuantitativeValue | QuantitativeValue[]

/**
 * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
 */
businessFunction?: BusinessFunction | BusinessFunction[]

/**
 * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
 */
itemCondition?: OfferItemCondition | OfferItemCondition[]

/**
 * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
 */
deliveryLeadTime?: QuantitativeValue | QuantitativeValue[]

/**
 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
 * \nSee also [[ineligibleRegion]].
 *     
 */
eligibleRegion?: GeoShape | GeoShape[] | Text | Text[] | Place | Place[]

/**
 * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 */
gtin12?: Text | Text[]

/**
 * The date when the item becomes valid.
 */
validFrom?: DateTime | DateTime[] | Date | Date[]

/**
 * The end of the availability of the product or service included in the offer.
 */
availabilityEnds?: DateTime | DateTime[] | Time | Time[] | Date | Date[]

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 */
aggregateRating?: AggregateRating | AggregateRating[]

/**
 * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
 */
advanceBookingRequirement?: QuantitativeValue | QuantitativeValue[]

/**
 * The place(s) from which the offer can be obtained (e.g. store locations).
 */
availableAtOrFrom?: Place | Place[]

/**
 * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
 */
sku?: Text | Text[]

/**
 * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
 */
eligibleTransactionVolume?: PriceSpecification | PriceSpecification[]

}