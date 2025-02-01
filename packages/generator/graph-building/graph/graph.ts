import type { IntermediaryType, IntermediaryProperty } from '../intermediary/builder.ts'
import { leftTab, template } from '@wtg/utilities'

export function compileIntermediaryGraph(types: IntermediaryType[]) {
  const graph = types.map((type) => new Type(type))
  return graph
}

const Imports = {
  /**
   * This template is used to create import statements. Following values are required to be passed in as an object:
   * - type: the type of the import
   * - quote: either single (`'`) or double (`"`) quote
   * - extension: either empty ('') or '.ts'
   * - semi: either empty ('') or ';'
   * @param values - {type: string, quote: string, extension: string, semi: string}
   */
  importTypeTemplate: template`import type \\{ {{type}} \\} from {{quote}}./{{type}}{{extension}}{{quote}}{{semi}}\n`,
} as const

const Exports = {
  /**
   * This template creates the actual type with its body.
   * - type: the type that is about to be created
   * - extends: use 'extends' or an empty string (''); intended to be used with supertype
   * - supertype: the super type of this type
   * - body: the properties etc.
   * @param values - {type: string, extends: string, supertype: string, body: string}
   */
  exportInterface: template`export interface {{type}}{{extends}}{{supertype}} \\{\n{{body}}\n\\}`,
} as const

/**
 * Represents an entity in the graph.
 */
abstract class Entity {
  /**
   * The human readable label of the entity
   */
  public readonly label: string

  /**
   * The comment or documentation to this entity. Null if none is provided.
   */
  public readonly comment: string | null

  /**
   * The ID of the entity in the schema.
   */
  public readonly schemaID: string

  /**
   * Prepares the data on calling
   *
   * @param label the label of this entity
   * @param comment the comment or documentation to this entity
   */
  constructor(schemaID: string, label: string, comment: string | null) {
    this.schemaID = schemaID
    this.label = this.handleIntermediaryLabel(label)
    this.comment = comment
  }

  // handles numeric characters on the first letter and prepends an underscore ('_')
  private handleIntermediaryLabel(label: string): string {
    if (isNaN(Number(label.charAt(0)))) return label
    return `_${label}`
  }

  /**
   * Creates a stringified representation of this entity's documentation
   *
   * @param tabs the count of tabs that this function is using as its base
   * @param tabWidth the tab width used on tabs
   * @returns the documentation of this entity
   */
  protected createDocumentation(tabs: number = 0, tabWidth: number = 0): string {
    if (!this.comment) return ''
    let template = ''
    template += '/**\n'
    template += this.comment
      .replace('\\n', '\n')
      .split('\n')
      .map((line) => ` * ${line}`)
      .join('\n')
    template += '\n */\n'
    return leftTab(template, tabs, tabWidth)
  }
}

export class Type extends Entity {
  public readonly properties: Set<Property>

  public readonly superType: string | string[] | null

  constructor(type: IntermediaryType) {
    super(type.id, type.label, type.comment)
    this.properties = type.properties ? new Set<Property>(type.properties.map((prop) => new Property(prop))) : new Set()
    this.superType = type.superType
  }

  public stringify(opts: Options = defaultOptions): string {
    let template = ''
    template += this.importStatements(opts)
    template += this.createDocumentation(opts.tabs, opts.tabWidth)
    template += this.writeInterface(opts)
    return template
  }

  private writeImportStatement(type: string, opts: Options = defaultOptions) {
    return Imports.importTypeTemplate({
      type: type,
      quote: opts.singleQuote ? `'` : `"`,
      extension: opts.removeImportExtensions ? '' : '.ts',
      semi: opts.semi ? ';' : '',
    })
  }

  private writeInterface(opts: Options) {
    const superType = Array.isArray(this.superType) ? this.superType.join(', ') : this.superType
    return Exports.exportInterface({
      type: this.label,
      extends: this.superType ? ' extends ' : '',
      supertype: superType || '',
      body: this.properties
        .keys()
        .map((prop) => prop.stringify(opts))
        .reduce((left, right) => `${left}\n${right}`, ''),
    })
  }

  private superTypeImportStatements(opts: Options): string | null {
    if (!this.superType) return ''
    if (Array.isArray(this.superType))
      return this.superType.map((type) => this.writeImportStatement(type, opts)).join('')
    else return this.writeImportStatement(this.superType, opts)
  }

  private importStatements(opts: Options) {
    let template = ''
    template += this.superTypeImportStatements(opts)
    template += new Set(this.properties.keys().flatMap((prop) => prop.range))
      .keys()
      .filter((type) => type !== this.label && type !== this.superType)
      .map((type) => this.writeImportStatement(type, opts))
      .reduce((left, right) => `${left}\n${right}`, '')

    template += '\n\n'
    return template
  }
}

type Options = {
  mode?: 'ts' | 'zod'
  tabs?: number
  tabWidth?: number
  removeImportExtensions?: boolean
  singleQuote?: boolean
  semi?: boolean
}

const defaultOptions: Options = {
  mode: 'ts',
  tabs: 0,
  tabWidth: 2,
  removeImportExtensions: false,
  singleQuote: true,
  semi: false,
}

/**
 * This represents the property of a type.
 */
export class Property extends Entity {
  public readonly range: string[]

  constructor(intermediary: IntermediaryProperty) {
    super(intermediary.id, intermediary.label, intermediary.comment)
    this.range = Array.isArray(intermediary.ranges)
      ? intermediary.ranges.map((type) => type.label)
      : [intermediary.ranges.label]
  }

  stringify(opts: Pick<Options, 'tabs' | 'tabWidth'> = defaultOptions): string {
    let template = ''
    template += this.createDocumentation(opts.tabs, opts.tabWidth)
    template += leftTab(
      `${this.label}?: ${this.range.map((type) => `${type} | ${type}[]`).join(' | ')}`,
      opts.tabs || 0,
      opts.tabWidth || 0
    )
    template += '\n'
    return template
  }
}
