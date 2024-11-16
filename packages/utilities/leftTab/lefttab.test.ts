import { assertEquals } from '@std/assert'
import { leftTab } from './index.ts'

Deno.test('leftTab adds tabs to each line with \\n line endings', () => {
  const input = `Line 1\nLine 2\nLine 3`
  const expected = `    Line 1\n    Line 2\n    Line 3`
  const result = leftTab(input, 1, 4)
  assertEquals(result, expected)
})

Deno.test('leftTab adds tabs to each line with \\r\\n line endings', () => {
  const input = `Line 1\r\nLine 2\r\nLine 3`
  const expected = `    Line 1\r\n    Line 2\r\n    Line 3`
  const result = leftTab(input, 1, 4)
  assertEquals(result, expected)
})

Deno.test('leftTab handles mixed line endings', () => {
  const input = `Line 1\r\nLine 2\nLine 3\r\nLine 4`
  const expected = `    Line 1\r\n    Line 2\n    Line 3\r\n    Line 4`
  const result = leftTab(input, 1, 4)
  assertEquals(result, expected)
})

Deno.test('leftTab works with empty lines', () => {
  const input = `Line 1\n\nLine 2\r\n\r\nLine 3`
  const expected = `    Line 1\n\n    Line 2\r\n\r\n    Line 3`
  const result = leftTab(input, 1, 4)
  assertEquals(result, expected)
})

Deno.test('leftTab handles an empty string', () => {
  const input = ``
  const expected = ``
  const result = leftTab(input, 1, 4)
  assertEquals(result, expected)
})

Deno.test('leftTab handles tab width and count correctly', () => {
  const input = `Line 1\nLine 2`
  const expected = `        Line 1\n        Line 2` // 2 tabs of width 4 = 8 spaces
  const result = leftTab(input, 2, 4)
  assertEquals(result, expected)
})

Deno.test('leftTab works with no tabs (count = 0)', () => {
  const input = `Line 1\nLine 2`
  const expected = `Line 1\nLine 2` // No tabs added
  const result = leftTab(input, 0, 4)
  assertEquals(result, expected)
})
