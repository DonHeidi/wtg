import type { CreativeWork } from './CreativeWork.ts'

import type { URL } from './URL.ts'

import type { DataFeed } from './DataFeed.ts'

import type { DateTime } from './DateTime.ts'

import type { Date } from './Date.ts'

import type { Thing } from './Thing.ts'

import type { PhysicalActivityCategory } from './PhysicalActivityCategory.ts'

import type { CategoryCode } from './CategoryCode.ts'

import type { Text } from './Text.ts'


/**
 * A SpecialAnnouncement combines a simple date-stamped textual information update
 *       with contextualized Web links and other structured data.  It represents an information update made by a
 *       locally-oriented organization, for example schools, pharmacies, healthcare providers,  community groups, police,
 *       local government.
 * 
 * For work in progress guidelines on Coronavirus-related markup see [this doc](https://docs.google.com/document/d/14ikaGCKxo50rRM7nvKSlbUpjyIk2WMQd3IkB1lItlrM/edit#).
 * 
 * The motivating scenario for SpecialAnnouncement is the [Coronavirus pandemic](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic), and the initial vocabulary is oriented to this urgent situation. Schema.org
 * expect to improve the markup iteratively as it is deployed and as feedback emerges from use. In addition to our
 * usual [Github entry](https://github.com/schemaorg/schemaorg/issues/2490), feedback comments can also be provided in [this document](https://docs.google.com/document/d/1fpdFFxk8s87CWwACs53SGkYv3aafSxz_DTtOQxMrBJQ/edit#).
 * 
 * 
 * While this schema is designed to communicate urgent crisis-related information, it is not the same as an emergency warning technology like [CAP](https://en.wikipedia.org/wiki/Common_Alerting_Protocol), although there may be overlaps. The intent is to cover
 * the kinds of everyday practical information being posted to existing websites during an emergency situation.
 * 
 * Several kinds of information can be provided:
 * 
 * We encourage the provision of "name", "text", "datePosted", "expires" (if appropriate), "category" and
 * "url" as a simple baseline. It is important to provide a value for "category" where possible, most ideally as a well known
 * URL from Wikipedia or Wikidata. In the case of the 2019-2020 Coronavirus pandemic, this should be "https://en.wikipedia.org/w/index.php?title=2019-20\_coronavirus\_pandemic" or "https://www.wikidata.org/wiki/Q81068910".
 * 
 * For many of the possible properties, values can either be simple links or an inline description, depending on whether a summary is available. For a link, provide just the URL of the appropriate page as the property's value. For an inline description, use a [[WebContent]] type, and provide the url as a property of that, alongside at least a simple "[[text]]" summary of the page. It is
 * unlikely that a single SpecialAnnouncement will need all of the possible properties simultaneously.
 * 
 * We expect that in many cases the page referenced might contain more specialized structured data, e.g. contact info, [[openingHours]], [[Event]], [[FAQPage]] etc. By linking to those pages from a [[SpecialAnnouncement]] you can help make it clearer that the events are related to the situation (e.g. Coronavirus) indicated by the [[category]] property of the [[SpecialAnnouncement]].
 * 
 * Many [[SpecialAnnouncement]]s will relate to particular regions and to identifiable local organizations. Use [[spatialCoverage]] for the region, and [[announcementLocation]] to indicate specific [[LocalBusiness]]es and [[CivicStructure]]s. If the announcement affects both a particular region and a specific location (for example, a library closure that serves an entire region), use both [[spatialCoverage]] and [[announcementLocation]].
 * 
 * The [[about]] property can be used to indicate entities that are the focus of the announcement. We now recommend using [[about]] only
 * for representing non-location entities (e.g. a [[Course]] or a [[RadioStation]]). For places, use [[announcementLocation]] and [[spatialCoverage]]. Consumers of this markup should be aware that the initial design encouraged the use of [[about]] for locations too.
 * 
 * The basic content of [[SpecialAnnouncement]] is similar to that of an [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)) feed. For publishers without such feeds, basic feed-like information can be shared by posting
 * [[SpecialAnnouncement]] updates in a page, e.g. using JSON-LD. For sites with Atom/RSS functionality, you can point to a feed
 * with the [[webFeed]] property. This can be a simple URL, or an inline [[DataFeed]] object, with [[encodingFormat]] providing
 * media type information, e.g. "application/rss+xml" or "application/atom+xml".
 * 
 */
export interface SpecialAnnouncement extends CreativeWork {

/**
 * The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom.
 */
webFeed?: URL | URL[] | DataFeed | DataFeed[]

/**
 * Publication date of an online listing.
 */
datePosted?: DateTime | DateTime[] | Date | Date[]

/**
 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 */
category?: Thing | Thing[] | PhysicalActivityCategory | PhysicalActivityCategory[] | CategoryCode | CategoryCode[] | Text | Text[] | URL | URL[]

}