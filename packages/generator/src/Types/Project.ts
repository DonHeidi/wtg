import type { Organization } from './Organization.ts'


/**
 * An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.
 * Use properties from [[Organization]], [[subOrganization]]/[[parentOrganization]] to indicate project sub-structures. 
 *    
 */
export interface Project extends Organization {

}