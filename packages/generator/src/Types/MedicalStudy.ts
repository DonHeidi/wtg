import type { MedicalEntity } from './MedicalEntity.ts'

import type { MedicalStudyStatus } from './MedicalStudyStatus.ts'

import type { Text } from './Text.ts'

import type { EventStatusType } from './EventStatusType.ts'

import type { MedicalCondition } from './MedicalCondition.ts'

import type { Person } from './Person.ts'

import type { Organization } from './Organization.ts'


/**
 * A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
 */
export interface MedicalStudy extends MedicalEntity {

/**
 * The status of the study (enumerated).
 */
status?: MedicalStudyStatus | MedicalStudyStatus[] | Text | Text[] | EventStatusType | EventStatusType[]

/**
 * Specifying the health condition(s) of a patient, medical study, or other target audience.
 */
healthCondition?: MedicalCondition | MedicalCondition[]

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 */
sponsor?: Person | Person[] | Organization | Organization[]

}