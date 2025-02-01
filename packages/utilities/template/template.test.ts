import { assertEquals, assertThrows } from '@std/assert'
import { template as createTemplate } from './index.ts'

Deno.test('template - basic replacement', () => {
  const template = createTemplate`Hello {{name}}!`
  const result = template({ name: 'World' })
  assertEquals(result, 'Hello World!')
})

Deno.test('template - multiple replacements', () => {
  const template = createTemplate`https://api.example.com/users/{{userId}}/posts/{{postId}}`
  const result = template({ userId: '123', postId: '456' })
  assertEquals(result, 'https://api.example.com/users/123/posts/456')
})

Deno.test('template - number values', () => {
  const template = createTemplate`User {{id}} is {{age}} years old`
  const result = template({ id: 123, age: 25 })
  assertEquals(result, 'User 123 is 25 years old')
})

Deno.test('template - repeated keys', () => {
  const template = createTemplate`{{value}} plus {{value}} equals {{sum}}`
  const result = template({ value: '2', sum: '4' })
  assertEquals(result, '2 plus 2 equals 4')
})

Deno.test('template - should fail with missing keys', () => {
  assertThrows(
    () => {
      const template = createTemplate`Hello {{name}}!`
      template({})
    },
    Error,
    'Missing required keys'
  )
})

Deno.test('template - should fail with extra keys', () => {
  assertThrows(
    () => {
      const template = createTemplate`Hello {{name}}!`
      template({ name: 'World', extra: 'value' })
    },
    Error,
    'Unexpected keys provided'
  )
})

Deno.test('template - handles single braces', () => {
  const template = createTemplate`{name} and {{name}}`
  const result = template({ name: 'World' })
  assertEquals(result, '{name} and World')
})

Deno.test('template - handles malformed double braces', () => {
  assertThrows(() => {
    const template = createTemplate`Hello {{name}!`
    template({ name: 'World' })
  }, Error)
})

Deno.test('template - handles escaped braces', () => {
  const template = createTemplate`\\{\\{escaped\\}\\} and {{name}} and \\{normal\\}`
  const result = template({ name: 'World' })
  assertEquals(result, '{{escaped}} and World and {normal}')
})

Deno.test('template - handles mixed escaped and template braces', () => {
  const template = createTemplate`{ "json": { "name": "{{name}}", "escaped": "\\{\\{value\\}\\}" } }`
  const result = template({ name: 'World' })
  assertEquals(result, '{ "json": { "name": "World", "escaped": "{{value}}" } }')
})

Deno.test('template - handles JSON with braces', () => {
  const template = createTemplate`{"user": {"name": "{{name}}", "id": {{id}} }}`
  const result = template({ name: 'John', id: 123 })
  assertEquals(result, '{"user": {"name": "John", "id": 123 }}')
})
