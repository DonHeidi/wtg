import type { OrganizeAction } from './OrganizeAction.ts'


/**
 * The act of registering to an organization/service without the guarantee to receive it.
 * \nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 */
export interface ApplyAction extends OrganizeAction {

}