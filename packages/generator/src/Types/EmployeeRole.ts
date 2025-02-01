import type { OrganizationRole } from './OrganizationRole.ts'

import type { Text } from './Text.ts'

import type { PriceSpecification } from './PriceSpecification.ts'

import type { MonetaryAmount } from './MonetaryAmount.ts'

import type { Number } from './Number.ts'


/**
 * A subclass of OrganizationRole used to describe employee relationships.
 */
export interface EmployeeRole extends OrganizationRole {

/**
 * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217)) used for the main salary information in this job posting or for this employee.
 */
salaryCurrency?: Text | Text[]

/**
 * The base salary of the job or of an employee in an EmployeeRole.
 */
baseSalary?: PriceSpecification | PriceSpecification[] | MonetaryAmount | MonetaryAmount[] | Number | Number[]

}