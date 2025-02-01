import type { PlanAction } from './PlanAction.ts'


/**
 * Scheduling future actions, events, or tasks.
 * \nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 */
export interface ScheduleAction extends PlanAction {

}