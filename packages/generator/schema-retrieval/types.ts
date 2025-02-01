type Localized = string | { '@language': string; '@value': string }

type SubClassOf = { '@id': string } | { '@id': string }[] | undefined

/**
 * Represents a generic schema.org entity with common properties.
 */
export interface SchemaEntity {
  /** Unique identifier */
  '@id': string
  /** Type or types */
  '@type'?: string | string[]
  /** Human-readable label*/
  'rdfs:label': Localized
  /** Description or comment */
  'rdfs:comment'?: Localized
  /** References to possible child entity */
  'schema:supersededBy'?: SchemaClass
  /** reference to the super class*/
  'rdfs:subClassOf'?: SubClassOf
}

/** Represents a Schema Class of objects */
export interface SchemaClass extends SchemaEntity {}

/**
 * Represents a property with the classes its belongs to and the classes it
 */
export interface SchemaProperty extends SchemaEntity {
  'schema:domainIncludes'?: Pick<SchemaClass, '@id'> | Pick<SchemaClass, '@id'>[]
  'schema:rangeIncludes'?: Pick<SchemaClass, '@id'> | Pick<SchemaClass, '@id'>[]
}
