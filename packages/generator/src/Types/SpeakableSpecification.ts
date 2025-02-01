import type { Intangible } from './Intangible.ts'

import type { CssSelectorType } from './CssSelectorType.ts'

import type { XPathType } from './XPathType.ts'


/**
 * A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property.
 */
export interface SpeakableSpecification extends Intangible {

/**
 * A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 */
cssSelector?: CssSelectorType | CssSelectorType[]

/**
 * An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 */
xpath?: XPathType | XPathType[]

}