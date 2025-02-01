import type { CreativeWork } from './CreativeWork.ts'

import type { MediaObject } from './MediaObject.ts'


/**
 * A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]].
 */
export interface HyperTocEntry extends CreativeWork {

/**
 * A media object that encodes this CreativeWork. This property is a synonym for encoding.
 */
associatedMedia?: MediaObject | MediaObject[]

}