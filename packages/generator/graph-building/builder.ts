import type { SchemaEntity, SchemaClass, SchemaProperty } from '../schema-retrieval/types.ts'

/**
 * Creates an intermediary graph from the given types and properties.
 * @param types - The types to create intermediary types from.
 * @param properties - The properties to create intermediary properties from.
 * @returns An array of intermediary types.
 */
export function createIntermediaryGraph(types: SchemaEntity[], properties: SchemaProperty[]): IntermediaryType[] {
  const intermediaryProperties = properties
    .filter((prop) => prop !== undefined && prop !== null)
    .map((prop) => new IntermediaryProperty(prop))
  const intermediaryTypes = types
    .filter((type) => type !== undefined && type !== null)
    .map((type) => new IntermediaryType(type, intermediaryProperties))
  return intermediaryTypes
}

/**
 * Represents a localized string in the graph.
 */
type Localized = string | { '@language': string; '@value': string }

/**
 * Represents an intermediary entity in the graph.
 */
abstract class IntermediaryEntity {
  /**
   * The ID of the entity.
   */
  public readonly id: string

  /**
   * The label of the entity.
   */
  public readonly label: string

  /**
   * The type of the entity.
   */
  public readonly type: string | string[] | null

  /**
   * The comment of the entity.
   */
  public readonly comment: string | null

  /**
   * Constructs an intermediary entity from a schema entity.
   * @param entity - The schema entity to construct from.
   */
  constructor(entity: SchemaEntity) {
    this.id = entity['@id']
    this.type = entity['@type'] || null
    this.label = this.handleLocalized(entity['rdfs:label'])
    this.comment = entity['rdfs:comment'] ? this.handleLocalized(entity['rdfs:comment']) : null
  }

  private handleLocalized(str: Localized) {
    if (typeof str === 'string') return str
    if (typeof str === 'object') {
      if (str['@language'] && str['@value']) return str['@value']
      throw new Error(`unknown format: ${str}`)
    }
    throw new Error(`unknown format: ${str}`)
  }
}

/**
 * Represents an intermediary type in the graph.
 */
export class IntermediaryType extends IntermediaryEntity {
  /**
   * The properties of the type.
   */
  public readonly properties?: IntermediaryProperty[]

  /**
   * The super type of the type.
   */
  public readonly superType: string | string[] | null

  /**
   * Constructs an intermediary type from a schema type.
   * @param type - The schema type to construct from.
   * @param properties - The properties to construct from.
   */
  constructor(type: SchemaClass, properties: IntermediaryProperty[]) {
    super(type)
    this.properties = properties.filter((prop) =>
      Array.isArray(prop.domains) ? prop.domains.some((domain) => domain.id == this.id) : prop.domains.id == this.id
    )
    this.superType = this.parseSuperType(type['rdfs:subClassOf'])
  }

  private parseSuperType(supertype?: SubClassOf) {
    if (!supertype) return null
    if (Array.isArray(supertype)) return supertype.map((type) => type['@id'].split(':')[1])
    if (!Array.isArray(supertype) && typeof supertype === 'object') return supertype['@id'].split(':')[1]

    throw new Error('unexpected format of: ' + supertype)
  }
}

/**
 * Represents the super type of a type.
 */
type SubClassOf = { '@id': string } | { '@id': string }[] | undefined

/**
 * Represents the range includes of a property.
 */
type RangeIncludesInterpreted = { id: string; label: string } | { id: string; label: string }[]

/**
 * Represents the domain includes of a property.
 */
type DomainIncludesInterpreted = RangeIncludesInterpreted

/**
 * Represents an intermediary property in the graph.
 */
export class IntermediaryProperty extends IntermediaryEntity {
  /**
   * The domains of the property.
   */
  public readonly domains: DomainIncludesInterpreted

  /**
   * The ranges of the property.
   */
  public readonly ranges: RangeIncludesInterpreted

  /**
   * Constructs an intermediary property from a schema property.
   * @param prop - The schema property to construct from.
   */
  constructor(prop: SchemaProperty) {
    if (!prop['@id']) throw new Error('property has no @id')
    if (!prop['rdfs:label']) throw new Error('property has no rdfs:label')
    if (!prop['schema:domainIncludes']) throw new Error('property has no schema:domainIncludes')
    if (!prop['schema:rangeIncludes']) throw new Error('property has no schema:rangeIncludes')
    super(prop)
    this.domains = prop['schema:domainIncludes'] ? this.parseTypes(prop['schema:domainIncludes']) : []
    this.ranges = prop['schema:rangeIncludes'] ? this.parseTypes(prop['schema:rangeIncludes']) : []
  }

  private parseTypes(types?: Pick<SchemaClass, '@id'> | Pick<SchemaClass, '@id'>[]): RangeIncludesInterpreted {
    if (Array.isArray(types)) return types.map((item) => ({ id: item['@id'], label: item['@id'].split(':')[1] }))
    if (!Array.isArray(types) && typeof types === 'object')
      return { id: types['@id'], label: types['@id'].split(':')[1] }
    return []
  }
}
