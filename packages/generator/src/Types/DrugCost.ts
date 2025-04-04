import type { MedicalEntity } from './MedicalEntity.ts'

import type { Text } from './Text.ts'

import type { AdministrativeArea } from './AdministrativeArea.ts'


/**
 * The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup.
 */
export interface DrugCost extends MedicalEntity {

/**
 * The unit in which the drug is measured, e.g. '5 mg tablet'.
 */
drugUnit?: Text | Text[]

/**
 * The location in which the status applies.
 */
applicableLocation?: AdministrativeArea | AdministrativeArea[]

}