import type { CreativeWork } from './CreativeWork.ts'


/**
 * A statement about something, for example a fun or interesting fact. If known, the main entity this statement is about can be indicated using mainEntity. For more formal claims (e.g. in Fact Checking), consider using [[Claim]] instead. Use the [[text]] property to capture the text of the statement.
 */
export interface Statement extends CreativeWork {

}