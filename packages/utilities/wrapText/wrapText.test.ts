import { describe, it } from '@std/testing/bdd'
import { expect } from '@std/expect'
import { wrapText } from './wrap-text.ts'

describe('wrapText', () => {
  it('should wrap text at specified character width', () => {
    const text = 'This is a long text that needs to be wrapped at a specific width'
    const result = wrapText(text, { characterWidth: 20 })
    expect(result).toBe('This is a long text\nthat needs to be\nwrapped at a\nspecific width')
  })

  it('should handle tabs correctly', () => {
    const text = 'Indented text with tabs'
    const result = wrapText(text, { tabs: 2, tabWidth: 2 })
    expect(result).toBe('    Indented text with tabs')
  })

  it('should apply line prefix and suffix', () => {
    const text = 'Text with prefix and suffix'
    const result = wrapText(text, {
      linePrefix: '* ',
      lineSuffix: ' *',
      characterWidth: 20,
    })
    expect(result).toBe('* Text with prefix *\n* and suffix *')
  })

  it('should use custom line separator', () => {
    const text = 'Multiple lines with custom separator'
    const result = wrapText(text, {
      characterWidth: 20,
      lineSeparator: '\r\n',
    })
    expect(result).toBe('Multiple lines with\r\ncustom separator')
  })

  it('should handle empty text', () => {
    const result = wrapText('', {})
    expect(result).toBe('')
  })

  it('should handle single word longer than character width', () => {
    const text = 'Supercalifragilisticexpialidocious'
    const result = wrapText(text, { characterWidth: 10 })
    expect(result).toBe('Supercalifragilisticexpialidocious')
  })

  it('should use default options when none provided', () => {
    const text = 'Normal text without special formatting'
    const result = wrapText(text, {})
    expect(result).toBe('Normal text without special formatting')
  })

  it('should combine all options correctly', () => {
    const text = 'Complex text with multiple formatting options'
    const result = wrapText(text, {
      tabs: 1,
      tabWidth: 2,
      characterWidth: 20,
      linePrefix: '> ',
      lineSuffix: ' <',
      lineSeparator: '\n\n',
    })
    expect(result).toBe('  > Complex text <\n\n  > with multiple <\n\n  > formatting <\n\n  > options <')
  })

  it('should respect existing line breaks', () => {
    const text = 'First paragraph.\nSecond paragraph.\nThird paragraph.'
    const result = wrapText(text, {})
    expect(result).toBe('First paragraph.\nSecond paragraph.\nThird paragraph.')
  })

  it('should wrap text within paragraphs', () => {
    const text =
      'This is a long first paragraph that needs wrapping.\nThis is the second paragraph that also needs to be wrapped.'
    const result = wrapText(text, { characterWidth: 20 })
    expect(result).toBe(
      'This is a long first\nparagraph that needs\nwrapping.\n' +
        'This is the second\nparagraph that also\nneeds to be wrapped.'
    )
  })

  it('should handle multiple line breaks', () => {
    const text = 'Paragraph one.\n\nParagraph two.\n\nParagraph three.'
    const result = wrapText(text, {})
    expect(result).toBe('Paragraph one.\n\nParagraph two.\n\nParagraph three.')
  })

  it('should apply formatting to each paragraph', () => {
    const text = 'First paragraph.\nSecond paragraph.'
    const result = wrapText(text, {
      tabs: 1,
      tabWidth: 2,
      linePrefix: '> ',
      lineSuffix: ' <',
    })
    expect(result).toBe('  > First paragraph. <\n  > Second paragraph. <')
  })

  it('should handle empty lines between paragraphs', () => {
    const text = 'Title\n\nFirst paragraph.\nSecond paragraph.\n\nConclusion.'
    const result = wrapText(text, { characterWidth: 20 })
    expect(result).toBe('Title\n\nFirst paragraph.\nSecond paragraph.\n\nConclusion.')
  })

  it('should remove line breaks when keepLineBreaks is false', () => {
    const text = 'First paragraph.\nSecond paragraph.\nThird paragraph.'
    const result = wrapText(text, { keepLineBreaks: false })
    expect(result).toBe('First paragraph. Second paragraph. Third paragraph.')
  })

  it('should wrap text as single paragraph when keepLineBreaks is false', () => {
    const text = 'This is a long\nfirst paragraph.\nThis is the second\nparagraph.'
    const result = wrapText(text, {
      keepLineBreaks: false,
      characterWidth: 20,
    })
    expect(result).toBe('This is a long first\nparagraph. This is\nthe second\nparagraph.')
  })

  it('should handle multiple line breaks when keepLineBreaks is false', () => {
    const text = 'Paragraph one.\n\nParagraph two.\n\n\nParagraph three.'
    const result = wrapText(text, { keepLineBreaks: false })
    expect(result).toBe('Paragraph one. Paragraph two. Paragraph three.')
  })

  it('should apply formatting after removing line breaks', () => {
    const text = 'First\nparagraph.\nSecond\nparagraph.'
    const result = wrapText(text, {
      keepLineBreaks: false,
      tabs: 1,
      tabWidth: 2,
      linePrefix: '> ',
      lineSuffix: ' <',
      characterWidth: 20,
    })
    expect(result).toBe('  > First <\n  > paragraph. <\n  > Second <\n  > paragraph. <')
  })
})
