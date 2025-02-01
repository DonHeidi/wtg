export interface Entity {
  '@id'?: string
  '@type'?: string | string[]
  'owl:equivalentClass'?: WithId | WithId[]
  'owl:equivalentProperty'?: WithId
  'rdfs:comment'?: string | WithLanguage
  'rdfs:label'?: string | WithLanguage
  'rdfs:subClassOf'?: WithId | WithId[]
  'rdfs:subPropertyOf'?: WithId | WithId[]
  'schema:contributor'?: WithId | WithId[]
  'schema:domainIncludes'?: WithId | WithId[]
  'schema:inverseOf'?: WithId
  'schema:isPartOf'?: WithId
  'schema:rangeIncludes'?: WithId | WithId[]
  'schema:sameAs'?: WithId
  'schema:source'?: WithId
  'schema:supersededBy'?: WithId
  'skos:closeMatch'?: WithId | WithId[]
  'skos:exactMatch'?: WithId
}

export interface WithLanguage {
  '@language': string
  '@value': string
}

export interface WithId {
  '@id': string
}
