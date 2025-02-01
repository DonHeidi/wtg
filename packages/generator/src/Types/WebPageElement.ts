import type { CreativeWork } from './CreativeWork.ts'

import type { CssSelectorType } from './CssSelectorType.ts'

import type { XPathType } from './XPathType.ts'


/**
 * A web page element, like a table or an image.
 */
export interface WebPageElement extends CreativeWork {

/**
 * A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 */
cssSelector?: CssSelectorType | CssSelectorType[]

/**
 * An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 */
xpath?: XPathType | XPathType[]

}