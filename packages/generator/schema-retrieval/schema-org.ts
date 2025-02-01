import type { Entity } from './types_new.ts'
import type { SchemaClass, SchemaProperty } from './types.ts'

export type SchemaOrgFile = 'all' | 'current'
export type SchemaOrgFormat = 'JSON-LD' | 'Turtle' | 'Triples' | 'Quads' | 'RDF/XML' | 'CSV'
export type FileExtension = 'jsonld' | 'ttl' | 'nt' | 'nq' | 'rdf' | 'csv'

export type FormatResult<F extends SchemaOrgFormat> = {
  'JSON-LD': { json(): Promise<Record<string, Array<Entity>>> }
  Turtle: { text(): Promise<string> }
  Triples: { text(): Promise<string> }
  Quads: { text(): Promise<string> }
  'RDF/XML': { text(): Promise<string> }
  CSV: { text(): Promise<string> }
}[F]

export type CSVOptions = 'types' | 'properties'

function getExtension(format: SchemaOrgFormat): FileExtension {
  switch (format) {
    case 'JSON-LD':
      return 'jsonld'
    case 'Turtle':
      return 'ttl'
    case 'Triples':
      return 'nt'
    case 'Quads':
      return 'nq'
    case 'RDF/XML':
      return 'rdf'
    case 'CSV':
      return 'csv'
    default:
      throw new Error(`Format ${format} is not supported`)
  }
}

interface Parser<F> {
  (content: F): [SchemaClass[], SchemaProperty[]]
}

/**
 * Parses the JSON-LD schema.
 *
 * @param schema the JSON-LD schema
 * @returns the parsed schema
 */
export function parseJsonld(schema: Record<string, Array<Entity>>): [SchemaClass[], SchemaProperty[]] {
  const graph: Array<Entity> = schema['@graph']
  const types: SchemaClass[] = graph.filter((item: Entity) => {
    if (Array.isArray(item['@type'])) return item['@type']?.includes('rdfs:Class')
    return item['@type'] === 'rdfs:Class'
  }) as SchemaClass[]

  const properties: SchemaProperty[] = graph.filter((item: Entity) => {
    if (Array.isArray(item['@type'])) return item['@type']?.includes('rdf:Property')
    return item['@type'] === 'rdf:Property'
  }) as SchemaProperty[]
  return [types, properties]
}

export async function retrieveTypeGraph<F extends SchemaOrgFormat>(
  file: SchemaOrgFile,
  format: F,
  ...args: F extends 'CSV' ? [CSVOptions] : []
) {
  const data = await fetchData(file, format, ...args)
  const content =
    format === 'JSON-LD'
      ? await (data as FormatResult<'JSON-LD'>).json()
      : await (data as FormatResult<Exclude<SchemaOrgFormat, 'JSON-LD'>>).text()

  return content
}

/**
 * This function fetches the schema.org schema.
 *
 * @param file either 'all' or 'current' depending on the use case
 * @param format defines the format of the retrieved schema
 * @param args in the case of CSV files, defines whether types or properties are fetched
 * @returns the fetched schema
 */
export async function fetchData<F extends SchemaOrgFormat>(
  file: SchemaOrgFile,
  format: F,
  ...args: F extends 'CSV' ? [CSVOptions] : []
): Promise<FormatResult<F>> {
  let url = `https://schema.org/version/latest/schemaorg-${file}-https${format == 'CSV' ? `-${args[0]}` : ''}`
  url += `.${getExtension(format)}`
  const response = await fetch(url)
  if (!response.ok) throw new FetchError(url, response.statusText, response.status)
  return response as FormatResult<F>
}

/**
 * This error is thrown when the fetch operation fails.
 *
 * @property url the url that was fetched
 * @property statusText the status text of the response
 * @property status the status code of the response
 */
export class FetchError extends Error {
  public readonly url: string
  public readonly statusText: string
  public readonly status: number

  /**
   * @param url the url that was fetched
   * @param statusText the status text of the response
   * @param status the status code of the response
   */
  constructor(url: string, statusText: string, status: number) {
    super(`[status ${status}] Failed to fetch ${url}: ${statusText}`)
    this.url = url
    this.statusText = statusText
    this.status = status
  }
}
