import type { CreateAction } from './CreateAction.ts'

import type { Language } from './Language.ts'

import type { Text } from './Text.ts'


/**
 * The act of authoring written creative content.
 */
export interface WriteAction extends CreateAction {

/**
 * A sub property of instrument. The language used on this action.
 */
language?: Language | Language[]

/**
 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 */
inLanguage?: Language | Language[] | Text | Text[]

}