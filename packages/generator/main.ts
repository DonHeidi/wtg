import { ensureDirSync, ensureFileSync } from '@std/fs'
import { join } from '@std/path'
import type { SchemaEntity, SchemaClass, SchemaProperty } from './types/types.ts'
import { IntermediaryType, IntermediaryProperty, Type } from './types/types.ts'

if (import.meta.main) {
  const schema = await fetchSchemaOrgJsonld('https://schema.org/version/latest/schemaorg-current-https.jsonld')
  const [types, properties] = parseSchema(schema)
  const intermediaryTypes = compileSchema(types, properties)
  const typeGraph = compileIntermediaryGraph(intermediaryTypes)
  writeFiles('./src/', 'Types', typeGraph)
}

async function fetchSchemaOrgJsonld(url: string): Promise<Record<string, Array<SchemaEntity>>> {
  const result = await fetch(url)
  const data = await result.json()
  return data
}

function writeFiles(directory: string, typesFolder: string, types: Type[]) {
  let importTempl = ''
  ensureDirSync(join(directory, typesFolder))
  types.forEach((type) => {
    importTempl += `export type { ${type.label} } from './${typesFolder}/${type.label}.ts'\n`
    const fileName = join(directory, typesFolder, `${type.label}.ts`)
    ensureFileSync(fileName)
    Deno.writeTextFile(fileName, type.stringify())
  })
  Deno.writeTextFileSync(join(directory, 'index.ts'), importTempl)
}

function parseSchema(schema: Record<string, Array<SchemaEntity>>): [SchemaClass[], SchemaProperty[]] {
  const graph: Array<SchemaEntity> = schema['@graph']
  const types: SchemaClass[] = graph.filter((item: SchemaClass) => {
    if (Array.isArray(item['@type'])) return item['@type']?.includes('rdfs:Class')
    return item['@type'] === 'rdfs:Class'
  })

  const properties: SchemaProperty[] = graph.filter((item: SchemaEntity) => {
    if (Array.isArray(item['@type'])) return item['@type']?.includes('rdf:Property')
    return item['@type'] === 'rdf:Property'
  }) as SchemaProperty[]
  return [types, properties]
}

function compileSchema(types: SchemaEntity[], properties: SchemaProperty[]): IntermediaryType[] {
  const intermediaryProperties = properties.map((prop) => new IntermediaryProperty(prop))
  const intermediaryTypes = types.map((type) => new IntermediaryType(type, intermediaryProperties))
  return intermediaryTypes
}

function compileIntermediaryGraph(types: IntermediaryType[]) {
  const graph = types.map((type) => new Type(type))
  return graph
}
