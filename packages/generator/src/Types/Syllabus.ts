import type { LearningResource } from './LearningResource.ts'


/**
 * A syllabus that describes the material covered in a course, often with several such sections per [[Course]] so that a distinct [[timeRequired]] can be provided for that section of the [[Course]].
 */
export interface Syllabus extends LearningResource {

}