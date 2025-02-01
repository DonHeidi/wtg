import type { Thing } from './Thing.ts'

import type { DrugLegalStatus } from './DrugLegalStatus.ts'

import type { MedicalEnumeration } from './MedicalEnumeration.ts'

import type { Text } from './Text.ts'

import type { Grant } from './Grant.ts'


/**
 * The most generic type of entity related to health and the practice of medicine.
 */
export interface MedicalEntity extends Thing {

/**
 * The drug or supplement's legal status, including any controlled substance schedules that apply.
 */
legalStatus?: DrugLegalStatus | DrugLegalStatus[] | MedicalEnumeration | MedicalEnumeration[] | Text | Text[]

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 */
funding?: Grant | Grant[]

}