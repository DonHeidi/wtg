import type { Text } from './Text.ts'

import type { Language } from './Language.ts'


/**
 * Data type: PronounceableText.
 */
export interface PronounceableText extends Text {

/**
 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 */
inLanguage?: Language | Language[] | Text | Text[]

}