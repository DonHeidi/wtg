import type { PlanAction } from './PlanAction.ts'


/**
 * Reserving a concrete object.
 * \nRelated actions:\n\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 */
export interface ReserveAction extends PlanAction {

}