import { createIntermediaryGraph } from './builder.ts'
import { describe, it } from '@std/testing/bdd'
import { expect } from '@std/expect'
import type { SchemaEntity, SchemaProperty } from '../schema-retrieval/types.ts'

describe('graph-building', () => {
  it('should create an intermediary graph', () => {
    const types = [] as SchemaEntity[]
    const properties = [] as SchemaProperty[]
    const graph = createIntermediaryGraph(types, properties)
    expect(graph).toBeDefined()
  })

  it('should create a graph with two types', () => {
    const types = [
      { '@id': 'schema:Person', '@type': 'rdfs:Class', 'rdfs:label': 'Person' },
      { '@id': 'schema:Organization', '@type': 'rdfs:Class', 'rdfs:label': 'Organization' },
    ]
    const graph = createIntermediaryGraph(types, [])
    expect(graph).toBeDefined()
    expect(graph.length).toBe(2)
    expect(graph[0].properties?.length).toBe(0)
    expect(graph[1].properties?.length).toBe(0)
    expect(graph[0].superType).toBeFalsy()
    expect(graph[1].superType).toBeFalsy()
    expect(graph[0].id).toBe('schema:Person')
    expect(graph[1].id).toBe('schema:Organization')
    expect(graph[0].label).toBe('Person')
    expect(graph[1].label).toBe('Organization')
    expect(graph[0].type).toBe('rdfs:Class')
    expect(graph[1].type).toBe('rdfs:Class')
  })

  it('should create a graph with two types and a property that is in the domain of one of them', () => {
    const types = [
      { '@id': 'schema:Person', '@type': 'rdfs:Class', 'rdfs:label': 'Person' },
      { '@id': 'schema:Organization', '@type': 'rdfs:Class', 'rdfs:label': 'Organization' },
    ]
    const properties = [
      {
        '@id': 'schema:name',
        '@type': 'rdf:Property',
        'rdfs:label': 'name',
        'schema:rangeIncludes': { '@id': 'schema:Person' },
        'schema:domainIncludes': { '@id': 'schema:Person' },
      },
    ]
    const graph = createIntermediaryGraph(types, properties)
    expect(graph).toBeDefined()
    expect(graph.length).toBe(2)
    expect(graph[0].properties?.length).toBe(1)
    expect(graph[1].properties?.length).toBe(0)
  })

  it('should create a graph with two types and a shared property', () => {
    const types = [
      { '@id': 'schema:Person', '@type': 'rdfs:Class', 'rdfs:label': 'Person' },
      { '@id': 'schema:Organization', '@type': 'rdfs:Class', 'rdfs:label': 'Organization' },
    ]
    const properties = [
      {
        '@id': 'schema:name',
        '@type': 'rdf:Property',
        'rdfs:label': 'name',
        'schema:domainIncludes': [{ '@id': 'schema:Person' }, { '@id': 'schema:Organization' }],
        'schema:rangeIncludes': { '@id': 'schema:Person' },
      },
    ]
    const graph = createIntermediaryGraph(types, properties)
    expect(graph).toBeDefined()
    expect(graph.length).toBe(2)
    expect(graph[0].properties?.length).toBe(1)
    expect(graph[1].properties?.length).toBe(1)
    expect(graph[0].properties?.[0].id).toBe('schema:name')
    expect(graph[1].properties?.[0].id).toBe('schema:name')
  })

  it('should create a graph with two types and distinct properties', () => {
    const types = [
      { '@id': 'schema:Person', '@type': 'rdfs:Class', 'rdfs:label': 'Person' },
      { '@id': 'schema:Organization', '@type': 'rdfs:Class', 'rdfs:label': 'Organization' },
    ]
    const properties = [
      {
        '@id': 'schema:name',
        '@type': 'rdf:Property',
        'rdfs:label': 'name',
        'schema:domainIncludes': { '@id': 'schema:Person' },
        'schema:rangeIncludes': { '@id': 'schema:Person' },
      },
      {
        '@id': 'schema:address',
        '@type': 'rdf:Property',
        'rdfs:label': 'address',
        'schema:domainIncludes': { '@id': 'schema:Organization' },
        'schema:rangeIncludes': { '@id': 'schema:Organization' },
      },
    ]
    const graph = createIntermediaryGraph(types, properties)
    expect(graph).toBeDefined()
    expect(graph.length).toBe(2)
    expect(graph[0].properties?.length).toBe(1)
    expect(graph[0].properties?.[0].id).toBe('schema:name')
    expect(graph[0].properties?.[0].ranges).toEqual({ id: 'schema:Person', label: 'Person' })
    expect(graph[1].properties?.length).toBe(1)
    expect(graph[1].properties?.[0].id).toBe('schema:address')
    expect(graph[1].properties?.[0].ranges).toEqual({ id: 'schema:Organization', label: 'Organization' })
  })

  it('should create a graph with two types, shared properties and distinct properties', () => {
    const types = [
      { '@id': 'schema:Person', '@type': 'rdfs:Class', 'rdfs:label': 'Person' },
      { '@id': 'schema:Organization', '@type': 'rdfs:Class', 'rdfs:label': 'Organization' },
    ]
    const properties = [
      {
        '@id': 'schema:name',
        '@type': 'rdf:Property',
        'rdfs:label': 'name',
        'schema:domainIncludes': { '@id': 'schema:Person' },
        'schema:rangeIncludes': { '@id': 'schema:Person' },
      },
      {
        '@id': 'schema:address',
        '@type': 'rdf:Property',
        'rdfs:label': 'address',
        'schema:domainIncludes': { '@id': 'schema:Organization' },
        'schema:rangeIncludes': { '@id': 'schema:Organization' },
      },
      {
        '@id': 'schema:email',
        '@type': 'rdf:Property',
        'rdfs:label': 'email',
        'schema:domainIncludes': { '@id': 'schema:Organization' },
        'schema:rangeIncludes': { '@id': 'schema:Organization' },
      },
      {
        '@id': 'schema:phone',
        '@type': 'rdf:Property',
        'rdfs:label': 'phone',
        'schema:domainIncludes': [{ '@id': 'schema:Organization' }, { '@id': 'schema:Person' }],
        'schema:rangeIncludes': { '@id': 'schema:Person' },
      },
    ]
    const graph = createIntermediaryGraph(types, properties)
    expect(graph).toBeDefined()
    expect(graph.length).toBe(2)
    expect(graph[0].properties?.length).toBe(2)
    expect(graph[0].properties?.[0].id).toBe('schema:name')
    expect(graph[0].properties?.[1].id).toBe('schema:phone')
    expect(graph[0].properties?.[0].domains).toEqual({ id: 'schema:Person', label: 'Person' })
    expect(graph[0].properties?.[1].domains).toEqual([
      { id: 'schema:Organization', label: 'Organization' },
      { id: 'schema:Person', label: 'Person' },
    ])
    expect(graph[1].properties?.length).toBe(3)
    expect(graph[1].properties?.[0].id).toBe('schema:address')
    expect(graph[1].properties?.[1].id).toBe('schema:email')
    expect(graph[1].properties?.[2].id).toBe('schema:phone')
    expect(graph[1].properties?.[0].domains).toEqual({ id: 'schema:Organization', label: 'Organization' })
    expect(graph[1].properties?.[1].domains).toEqual({ id: 'schema:Organization', label: 'Organization' })
    expect(graph[1].properties?.[2].domains).toEqual([
      { id: 'schema:Organization', label: 'Organization' },
      { id: 'schema:Person', label: 'Person' },
    ])
  })

  it('should create a graph with a super type', () => {
    const types = [
      {
        '@id': 'schema:SubOrganization',
        '@type': 'rdfs:Class',
        'rdfs:label': 'SubOrganization',
        'rdfs:subClassOf': { '@id': 'schema:Organization' },
      },
      {
        '@id': 'schema:Organization',
        '@type': 'rdfs:Class',
        'rdfs:label': 'Organization',
      },
    ] as SchemaEntity[]
    const graph = createIntermediaryGraph(types, [])
    expect(graph).toBeDefined()
    expect(graph[0].superType).toBe('Organization')
  })

  it('should handle multiple super types', () => {
    const types = [
      {
        '@id': 'schema:MultiInheritance',
        '@type': 'rdfs:Class',
        'rdfs:label': 'MultiInheritance',
        'rdfs:subClassOf': [{ '@id': 'schema:TypeA' }, { '@id': 'schema:TypeB' }],
      },
      { '@id': 'schema:TypeA', '@type': 'rdfs:Class', 'rdfs:label': 'TypeA' },
      { '@id': 'schema:TypeB', '@type': 'rdfs:Class', 'rdfs:label': 'TypeB' },
    ]
    const graph = createIntermediaryGraph(types, [])
    expect(graph[0].superType).toEqual(['TypeA', 'TypeB'])
  })

  it('should handle localized labels with language tags', () => {
    const types = [
      {
        '@id': 'schema:Person',
        '@type': 'rdfs:Class',
        'rdfs:label': { '@language': 'en', '@value': 'Person' },
      },
    ] as SchemaEntity[]
    const graph = createIntermediaryGraph(types, [])
    expect(graph[0].label).toBe('Person')
  })

  it('should handle comments', () => {
    const types = [
      {
        '@id': 'schema:Person',
        '@type': 'rdfs:Class',
        'rdfs:label': 'Person',
        'rdfs:comment': 'A person (alive, dead, undead, or fictional).',
      },
    ] as SchemaEntity[]
    const graph = createIntermediaryGraph(types, [])
    expect(graph[0].comment).toBe('A person (alive, dead, undead, or fictional).')
  })

  it('should handle localized comments', () => {
    const types = [
      {
        '@id': 'schema:Person',
        '@type': 'rdfs:Class',
        'rdfs:label': 'Person',
        'rdfs:comment': { '@language': 'en', '@value': 'A person (alive, dead, undead, or fictional).' },
      },
    ] as SchemaEntity[]
    const graph = createIntermediaryGraph(types, [])
    expect(graph[0].comment).toBe('A person (alive, dead, undead, or fictional).')
  })

  it('should handle properties with multiple ranges', () => {
    const types = [{ '@id': 'schema:Person', '@type': 'rdfs:Class', 'rdfs:label': 'Person' }]
    const properties = [
      {
        '@id': 'schema:knows',
        '@type': 'rdf:Property',
        'rdfs:label': 'knows',
        'schema:domainIncludes': { '@id': 'schema:Person' },
        'schema:rangeIncludes': [{ '@id': 'schema:Person' }, { '@id': 'schema:Organization' }],
      },
    ]
    const graph = createIntermediaryGraph(types, properties)
    expect(graph[0].properties?.[0].ranges).toEqual([
      { id: 'schema:Person', label: 'Person' },
      { id: 'schema:Organization', label: 'Organization' },
    ])
  })

  it('should handle missing optional fields', () => {
    const types = [
      {
        '@id': 'schema:Thing',
        '@type': 'rdfs:Class',
        'rdfs:label': 'Thing',
      },
    ]
    const graph = createIntermediaryGraph(types, [])
    expect(graph[0].comment).toBeNull()
    expect(graph[0].superType).toBeNull()
  })

  it('should handle types with multiple @type values', () => {
    const types = [
      {
        '@id': 'schema:Person',
        '@type': ['rdfs:Class', 'schema:Type'],
        'rdfs:label': 'Person',
      },
    ] as SchemaEntity[]
    const graph = createIntermediaryGraph(types, [])
    expect(Array.isArray(graph[0].type)).toBe(true)
    expect(graph[0].type).toEqual(['rdfs:Class', 'schema:Type'])
  })

  it('should handle invalid or malformed localized strings', () => {
    const types = [
      {
        '@id': 'schema:Person',
        '@type': 'rdfs:Class',
        'rdfs:label': { '@invalid': 'format' }, // Invalid format
      },
    ] as unknown as SchemaEntity[]
    expect(() => createIntermediaryGraph(types, [])).toThrow('unknown format')
  })

  it('should handle empty arrays for domainIncludes and rangeIncludes', () => {
    const properties = [
      {
        '@id': 'schema:test',
        '@type': 'rdf:Property',
        'rdfs:label': 'test',
        'schema:domainIncludes': [],
        'schema:rangeIncludes': [],
      },
    ]
    const graph = createIntermediaryGraph([], properties)
    expect(graph).toBeDefined()
    expect(graph.length).toBe(0)
  })

  it('should handle circular inheritance', () => {
    const types = [
      {
        '@id': 'schema:TypeA',
        '@type': 'rdfs:Class',
        'rdfs:label': 'TypeA',
        'rdfs:subClassOf': { '@id': 'schema:TypeB' },
      },
      {
        '@id': 'schema:TypeB',
        '@type': 'rdfs:Class',
        'rdfs:label': 'TypeB',
        'rdfs:subClassOf': { '@id': 'schema:TypeA' },
      },
    ] as SchemaEntity[]
    const graph = createIntermediaryGraph(types, [])
    expect(graph[0].superType).toBe('TypeB')
    expect(graph[1].superType).toBe('TypeA')
  })

  it('should handle undefined or null values in property arrays', () => {
    const properties = [
      undefined,
      null,
      {
        '@id': 'schema:validProp',
        '@type': 'rdf:Property',
        'rdfs:label': 'valid',
        'schema:domainIncludes': { '@id': 'schema:Person' },
        'schema:rangeIncludes': { '@id': 'schema:Person' },
      },
    ] as unknown as SchemaProperty[]
    expect(() => createIntermediaryGraph([], properties)).not.toThrow()
  })

  it('should handle malformed @id formats', () => {
    const types = [
      {
        '@id': 'malformed-id-without-prefix',
        '@type': 'rdfs:Class',
        'rdfs:label': 'Malformed',
      },
    ] as SchemaEntity[]
    const graph = createIntermediaryGraph(types, [])
    expect(graph[0].id).toBe('malformed-id-without-prefix')
  })

  it('should handle properties with missing required fields', () => {
    const properties = [
      {
        '@id': 'schema:test',
        // Missing @type
        // Missing rdfs:label
      },
    ] as unknown as SchemaProperty[]
    expect(() => createIntermediaryGraph([], properties)).toThrow()
  })
})
