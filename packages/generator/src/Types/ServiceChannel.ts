import type { Intangible } from './Intangible.ts'

import type { Text } from './Text.ts'

import type { Language } from './Language.ts'


/**
 * A means for accessing a service, e.g. a government office location, web site, or phone number.
 */
export interface ServiceChannel extends Intangible {

/**
 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
 */
availableLanguage?: Text | Text[] | Language | Language[]

}