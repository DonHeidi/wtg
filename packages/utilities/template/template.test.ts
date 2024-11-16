import { assertEquals, assertThrows } from '@std/assert'
import { template as createTemplate } from './index.ts'

Deno.test('template - basic replacement', () => {
  const templ = createTemplate`Hello {{name}}!`
  const result = templ({ name: 'World' })
  assertEquals(result, 'Hello World!')
})

Deno.test('template - multiple replacements', () => {
  const templ = createTemplate`https://api.example.com/users/{{userId}}/posts/{{postId}}`
  const result = templ({ userId: '123', postId: '456' })
  assertEquals(result, 'https://api.example.com/users/123/posts/456')
})

Deno.test('template - number values', () => {
  const templ = createTemplate`User {{id}} is {{age}} years old`
  const result = templ({ id: 123, age: 25 })
  assertEquals(result, 'User 123 is 25 years old')
})

Deno.test('template - repeated keys', () => {
  const templ = createTemplate`{{value}} plus {{value}} equals {{sum}}`
  const result = templ({ value: '2', sum: '4' })
  assertEquals(result, '2 plus 2 equals 4')
})

Deno.test('template - should fail with missing keys', () => {
  assertThrows(
    () => {
      const templ = createTemplate`Hello {{name}}!`
      templ({})
    },
    Error,
    'Missing required keys'
  )
})

Deno.test('template - should fail with extra keys', () => {
  assertThrows(
    () => {
      const templ = createTemplate`Hello {{name}}!`
      templ({ name: 'World', extra: 'value' })
    },
    Error,
    'Unexpected keys provided'
  )
})

Deno.test('template - handles single braces', () => {
  const templ = createTemplate`{name} and {{name}}`
  const result = templ({ name: 'World' })
  assertEquals(result, '{name} and World')
})

Deno.test('template - handles malformed double braces', () => {
  assertThrows(() => {
    const templ = createTemplate`Hello {{name}!`
    templ({ name: 'World' })
  }, Error)
})

Deno.test('template - handles escaped braces', () => {
  const templ = createTemplate`\\{\\{escaped\\}\\} and {{name}} and \\{normal\\}`
  const result = templ({ name: 'World' })
  assertEquals(result, '{{escaped}} and World and {normal}')
})

Deno.test('template - handles mixed escaped and template braces', () => {
  const templ = createTemplate`{ "json": { "name": "{{name}}", "escaped": "\\{\\{value\\}\\}" } }`
  const result = templ({ name: 'World' })
  assertEquals(result, '{ "json": { "name": "World", "escaped": "{{value}}" } }')
})

Deno.test('template - handles JSON with braces', () => {
  const templ = createTemplate`{"user": {"name": "{{name}}", "id": {{id}} }}`
  const result = templ({ name: 'John', id: 123 })
  assertEquals(result, '{"user": {"name": "John", "id": 123 }}')
})
