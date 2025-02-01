import { describe, it } from '@std/testing/bdd'
import { expect } from '@std/expect'
import { stub } from '@std/testing/mock'
import { fetchData } from './schema-org.ts'
import { parseJsonld as parseSchema } from './schema-org.ts'

describe('Fetching the schema', () => {
  it('shoud fetch the json', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      return new Response(JSON.stringify({ hello: 'world' }))
    })

    const result = await fetchData('current', 'JSON-LD')
    const json = await result.json()
    expect(json).toMatchObject({ hello: 'world' })
  })

  it('should fetch the csv', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      return new Response('hello,world')
    })

    const result = await fetchData('current', 'CSV', 'types')
    const text = await result.text()
    expect(text).toBe('hello,world')
  })

  it('should fetch the csv', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      return new Response('hello,world')
    })

    const result = await fetchData('current', 'CSV', 'properties')
    const text = await result.text()
    expect(text).toBe('hello,world')
  })

  it('should throw an error if no connection can be made', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      throw new Error('File not found')
    })

    await expect(fetchData('current', 'JSON-LD')).rejects.toThrow()
  })
})

describe('Error handling in fetchData', () => {
  it('should throw an error if no connection can be made', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      throw new Error('Failed to fetch')
    })

    await expect(fetchData('current', 'JSON-LD')).rejects.toThrow('Failed to fetch')
  })

  it('should throw an error for timeout', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      throw new TypeError('Network request failed')
    })

    await expect(fetchData('current', 'JSON-LD')).rejects.toThrow('Network request failed')
  })

  it('should throw an error for invalid URL', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      throw new TypeError('Invalid URL')
    })

    await expect(fetchData('current', 'JSON-LD')).rejects.toThrow('Invalid URL')
  })

  it('should handle non-200 responses', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      return new Response('Not Found', { status: 404, statusText: 'Not Found' })
    })

    await expect(fetchData('current', 'JSON-LD')).rejects.toThrow(
      '[status 404] Failed to fetch https://schema.org/version/latest/schemaorg-current-https.jsonld: Not Found'
    )
  })
})

describe('Parsing the json-ld to the types and properties graph', () => {
  it('should correctly separate classes and properties', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      return new Response(
        JSON.stringify({
          '@graph': [
            {
              '@id': 'schema:WantAction',
              '@type': 'rdfs:Class',
              'rdfs:comment': 'The act of expressing a desire about the object. An agent wants an object.',
              'rdfs:label': 'WantAction',
              'rdfs:subClassOf': {
                '@id': 'schema:ReactAction',
              },
            },
            {
              '@id': 'schema:originalMediaLink',
              '@type': 'rdf:Property',
              'rdfs:comment': 'Link to the page containing an original version of the content.',
              'rdfs:label': 'originalMediaLink',
              'schema:domainIncludes': {
                '@id': 'schema:MediaReview',
              },
              'schema:rangeIncludes': [
                {
                  '@id': 'schema:URL',
                },
              ],
            },
          ],
        })
      )
    })

    const result = await fetchData('current', 'JSON-LD')
    const json = await result.json()
    const [classes, properties] = parseSchema(json)

    expect(classes).toHaveLength(1)
    expect(classes[0]).toMatchObject({
      '@id': 'schema:WantAction',
      '@type': 'rdfs:Class',
      'rdfs:label': 'WantAction',
    })

    expect(properties).toHaveLength(1)
    expect(properties[0]).toMatchObject({
      '@id': 'schema:originalMediaLink',
      '@type': 'rdf:Property',
      'rdfs:label': 'originalMediaLink',
    })
  })

  it('should handle arrays of @type values', async () => {
    // deno-lint-ignore require-await
    using _fetchStub = stub(globalThis, 'fetch', async () => {
      return new Response(
        JSON.stringify({
          '@graph': [
            {
              '@id': 'schema:Time',
              '@type': ['schema:DataType', 'rdfs:Class'],
              'rdfs:comment': 'A point in time recurring on multiple days',
              'rdfs:label': 'Time',
            },
          ],
        })
      )
    })

    const result = await fetchData('current', 'JSON-LD')
    const json = await result.json()
    const [classes, properties] = parseSchema(json)

    expect(classes).toHaveLength(1)
    expect(classes[0]).toMatchObject({
      '@id': 'schema:Time',
      '@type': ['schema:DataType', 'rdfs:Class'],
      'rdfs:label': 'Time',
    })
    expect(properties).toHaveLength(0)
  })
})
