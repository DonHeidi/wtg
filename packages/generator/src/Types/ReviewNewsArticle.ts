import type { NewsArticle } from './NewsArticle.ts'
import type { CriticReview } from './CriticReview.ts'


/**
 * A [[NewsArticle]] and [[CriticReview]] providing a professional critic's assessment of a service, product, performance, or artistic or literary work.
 */
export interface ReviewNewsArticle extends NewsArticle, CriticReview {

}