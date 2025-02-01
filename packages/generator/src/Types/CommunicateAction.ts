import type { InteractAction } from './InteractAction.ts'

import type { Language } from './Language.ts'

import type { Audience } from './Audience.ts'

import type { ContactPoint } from './ContactPoint.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'

import type { Thing } from './Thing.ts'

import type { Text } from './Text.ts'


/**
 * The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 */
export interface CommunicateAction extends InteractAction {

/**
 * A sub property of instrument. The language used on this action.
 */
language?: Language | Language[]

/**
 * A sub property of participant. The participant who is at the receiving end of the action.
 */
recipient?: Audience | Audience[] | ContactPoint | ContactPoint[] | Person | Person[] | Organization | Organization[]

/**
 * The subject matter of the content.
 */
about?: Thing | Thing[]

/**
 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 */
inLanguage?: Language | Language[] | Text | Text[]

}