import type { Organization } from './Organization.ts'

import type { CreativeWork } from './CreativeWork.ts'

import type { URL } from './URL.ts'

import type { Text } from './Text.ts'

import type { AboutPage } from './AboutPage.ts'

import type { Article } from './Article.ts'


/**
 * A News/Media organization such as a newspaper or TV station.
 */
export interface NewsMediaOrganization extends Organization {

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 */
diversityPolicy?: CreativeWork | CreativeWork[] | URL | URL[]

/**
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 */
ethicsPolicy?: URL | URL[] | CreativeWork | CreativeWork[]

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 */
unnamedSourcesPolicy?: CreativeWork | CreativeWork[] | URL | URL[]

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 */
correctionsPolicy?: CreativeWork | CreativeWork[] | URL | URL[]

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 */
ownershipFundingInfo?: CreativeWork | CreativeWork[] | Text | Text[] | URL | URL[] | AboutPage | AboutPage[]

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 */
diversityStaffingReport?: URL | URL[] | Article | Article[]

/**
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 */
actionableFeedbackPolicy?: URL | URL[] | CreativeWork | CreativeWork[]

}