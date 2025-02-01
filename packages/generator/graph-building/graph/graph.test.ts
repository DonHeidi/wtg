import { compileIntermediaryGraph } from './graph.ts'
import { describe, it } from '@std/testing/bdd'
import { expect } from '@std/expect'
import type { IntermediaryType, IntermediaryProperty } from '../intermediary/builder.ts'

describe('graph', () => {
  describe('compileIntermediaryGraph', () => {
    it('should compile an empty graph', () => {
      const types: IntermediaryType[] = []
      const graph = compileIntermediaryGraph(types)
      expect(graph).toBeDefined()
      expect(graph).toEqual([])
    })

    it('should compile a simple type without properties', () => {
      const types: IntermediaryType[] = [
        {
          id: 'schema:Person',
          label: 'Person',
          type: 'rdfs:Class',
          comment: null,
          properties: [],
          superType: null,
        },
      ] as unknown[] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      expect(graph).toBeDefined()
      expect(graph.length).toBe(1)
      expect(graph[0].label).toBe('Person')
      expect(graph[0].properties.size).toBe(0)
    })

    it('should compile a type with properties', () => {
      const property: IntermediaryProperty = {
        id: 'schema:name',
        label: 'name',
        type: 'rdf:Property',
        comment: 'The name of the person',
        domains: { id: 'schema:Person', label: 'Person' },
        ranges: { id: 'schema:Text', label: 'Text' },
      } as IntermediaryProperty

      const types: IntermediaryType[] = [
        {
          id: 'schema:Person',
          label: 'Person',
          type: 'rdfs:Class',
          comment: 'A person',
          properties: [property],
          superType: null,
        },
      ] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      expect(graph[0].properties.size).toBe(1)
      const prop = Array.from(graph[0].properties)[0]
      expect(prop.label).toBe('name')
      expect(prop.range).toEqual(['Text'])
    })

    it('should handle types with inheritance', () => {
      const types: IntermediaryType[] = [
        {
          id: 'schema:Employee',
          label: 'Employee',
          type: 'rdfs:Class',
          comment: null,
          properties: [],
          superType: 'Person',
        },
      ] as unknown[] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      expect(graph[0].superType).toBe('Person')
    })

    it('should handle types with multiple inheritance', () => {
      const types: IntermediaryType[] = [
        {
          id: 'schema:MultiType',
          label: 'MultiType',
          type: 'rdfs:Class',
          comment: null,
          properties: [],
          superType: ['TypeA', 'TypeB'],
        },
      ] as unknown[] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      expect(Array.isArray(graph[0].superType)).toBe(true)
      expect(graph[0].superType).toEqual(['TypeA', 'TypeB'])
    })

    it('should handle properties with multiple ranges', () => {
      const property: IntermediaryProperty = {
        id: 'schema:contact',
        label: 'contact',
        type: 'rdf:Property',
        comment: null,
        domains: { id: 'schema:Person', label: 'Person' },
        ranges: [
          { id: 'schema:Person', label: 'Person' },
          { id: 'schema:Organization', label: 'Organization' },
        ],
      } as IntermediaryProperty

      const types: IntermediaryType[] = [
        {
          id: 'schema:Person',
          label: 'Person',
          type: 'rdfs:Class',
          comment: null,
          properties: [property],
          superType: null,
        },
      ] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      const prop = Array.from(graph[0].properties)[0]
      expect(prop.range).toEqual(['Person', 'Organization'])
    })

    it('should have no duplicates in the import statements', () => {
      const properties: IntermediaryProperty[] = [
        {
          id: 'schema:name',
          label: 'name',
          type: 'rdf:Property',
          comment: null,
          domains: { id: 'schema:Person', label: 'Person' },
          ranges: { id: 'schema:Text', label: 'Text' },
        },
        {
          id: 'schema:name',
          label: 'name',
          type: 'rdf:Property',
          comment: null,
          domains: { id: 'schema:Person', label: 'Person' },
          ranges: { id: 'schema:Thing', label: 'Thing' },
        },
      ] as IntermediaryProperty[]

      const types: IntermediaryType[] = [
        {
          id: 'schema:Person',
          label: 'Person',
          type: 'rdfs:Class',
          comment: null,
          properties: properties,
          superType: 'Thing',
        },
      ] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      const output = graph[0].stringify({ removeImportExtensions: true })

      const textImport = "import type { Text } from './Text.ts'"
      const thingImport = "import type { Thing } from './Thing.ts'"

      // Count occurrences using split
      const textImportCount = output.split(textImport).length - 1
      const thingImportCount = output.split(thingImport).length - 1

      expect(textImportCount).toBe(1)
      expect(thingImportCount).toBe(1)
    })

    it('should handle numeric labels by prepending underscore', () => {
      const types: IntermediaryType[] = [
        {
          id: 'schema:3DModel',
          label: '3DModel',
          type: 'rdfs:Class',
          comment: null,
          properties: [],
          superType: null,
        },
      ] as unknown[] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      expect(graph[0].label).toBe('_3DModel')
    })

    it('should stringify a type correctly', () => {
      const property: IntermediaryProperty = {
        id: 'schema:name',
        label: 'name',
        type: 'rdf:Property',
        comment: 'The name of the person',
        domains: { id: 'schema:Person', label: 'Person' },
        ranges: { id: 'schema:Text', label: 'Text' },
      } as IntermediaryProperty

      const types: IntermediaryType[] = [
        {
          id: 'schema:Person',
          label: 'Person',
          type: 'rdfs:Class',
          comment: 'A person',
          properties: [property],
          superType: null,
        },
      ] as unknown[] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      const stringified = graph[0].stringify()

      expect(stringified).toContain('export interface Person {')
      expect(stringified).toContain('name?: Text | Text[]')
      expect(stringified).toContain('* A person')
      expect(stringified).toContain('* The name of the person')
    })

    it('should handle different stringify options', () => {
      const types: IntermediaryType[] = [
        {
          id: 'schema:Person',
          label: 'Person',
          type: 'rdfs:Class',
          comment: null,
          properties: [],
          superType: 'Thing',
        },
      ] as unknown[] as IntermediaryType[]

      const graph = compileIntermediaryGraph(types)
      const stringified = graph[0].stringify({
        mode: 'ts',
        singleQuote: false,
        semi: true,
        removeImportExtensions: true,
      })

      expect(stringified).toContain('import type { Thing } from "./Thing";')
      expect(stringified).toContain('export interface Person extends Thing {')
    })
  })
})
