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

import type { ItemAvailability } from './ItemAvailability.ts'

import type { Text } from './Text.ts'

import type { DeliveryMethod } from './DeliveryMethod.ts'

import type { Place } from './Place.ts'

import type { GeoShape } from './GeoShape.ts'

import type { BusinessEntityType } from './BusinessEntityType.ts'

import type { WarrantyPromise } from './WarrantyPromise.ts'

import type { URL } from './URL.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'

import type { PriceSpecification } from './PriceSpecification.ts'

import type { TypeAndQuantityNode } from './TypeAndQuantityNode.ts'

import type { PaymentMethod } from './PaymentMethod.ts'

import type { LoanOrCredit } from './LoanOrCredit.ts'

import type { BusinessFunction } from './BusinessFunction.ts'

import type { OfferItemCondition } from './OfferItemCondition.ts'


/**
 * A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.
 */
export interface Demand extends Intangible {

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
 * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
 */
availability?: ItemAvailability | ItemAvailability[]

/**
 * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
 */
serialNumber?: Text | Text[]

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
 * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
 */
includesObject?: TypeAndQuantityNode | TypeAndQuantityNode[]

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 */
acceptedPaymentMethod?: Text | Text[] | PaymentMethod | PaymentMethod[] | LoanOrCredit | LoanOrCredit[]

/**
 * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 */
gtin8?: Text | Text[]

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