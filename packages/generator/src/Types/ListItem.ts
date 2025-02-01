import type { Intangible } from './Intangible.ts'

import type { Text } from './Text.ts'

import type { Integer } from './Integer.ts'

import type { Thing } from './Thing.ts'


/**
 * An list item, e.g. a step in a checklist or how-to description.
 */
export interface ListItem extends Intangible {

/**
 * The position of an item in a series or sequence of items.
 */
position?: Text | Text[] | Integer | Integer[]

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 */
item?: Thing | Thing[]

}