import type { Event } from './Event.ts'

import type { Text } from './Text.ts'

import type { URL } from './URL.ts'


/**
 * Event type: Sports event.
 */
export interface SportsEvent extends Event {

/**
 * A type of sport (e.g. Baseball).
 */
sport?: Text | Text[] | URL | URL[]

}