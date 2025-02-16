/**
 * Options for the wrapText function.
 */
export interface WrapOptions {
  /**
   * The number of tabs to add to the start of each line.
   */
  tabs?: number
  /**
   * The width of each tab.
   */
  tabWidth?: number
  /**
   * Whether to keep existing line breaks in the text.
   */
  keepLineBreaks?: boolean
  /**
   * The maximum width of each line.
   */
  characterWidth?: number
  /**
   * The prefix to add to each line.
   */
  linePrefix?: string
  /**
   * The suffix to add to each line.
   */
  lineSuffix?: string
  /**
   * The separator to use between lines.
   */
  lineSeparator?: string
}

const defaultOptions: Required<WrapOptions> = {
  tabs: 0,
  tabWidth: 2,
  keepLineBreaks: true,
  characterWidth: 80,
  linePrefix: '',
  lineSuffix: '',
  lineSeparator: '\n',
} as const

/**
 * Wraps text to a specific width, with optional tabs, line prefix, suffix, and separator.
 *
 * @param text - The text to wrap.
 * @param options - The options for wrapping the text.
 * @returns The wrapped text.
 */
export function wrapText(text: string, options: WrapOptions) {
  const { tabs, tabWidth, keepLineBreaks, characterWidth, linePrefix, lineSuffix, lineSeparator } = {
    ...defaultOptions,
    ...options,
  }

  const result = []
  // First split by existing line separators
  // const paragraphs = text.split(/\r?\n/)

  const paragraphs = keepLineBreaks ? text.split(/\r?\n/g) : [text.replaceAll(/(\r?\n)+/g, ' ')]

  for (const paragraph of paragraphs) {
    const lines = []
    const words = paragraph.split(' ')
    const tabString = ' '.repeat(tabs * tabWidth)
    let currentLine = ''

    for (const word of words) {
      const potentialLine = currentLine.length === 0 ? tabString + linePrefix + word : currentLine + ' ' + word

      if (currentLine.length === 0) {
        currentLine = potentialLine
      } else if ((potentialLine + lineSuffix).length > characterWidth) {
        lines.push(currentLine + lineSuffix)
        currentLine = tabString + linePrefix + word
      } else {
        currentLine = potentialLine
      }
    }

    // Add the last line with suffix
    if (currentLine.length > 0) {
      lines.push(currentLine + lineSuffix)
    }

    result.push(lines.join(lineSeparator))
  }

  return result.join(lineSeparator)
}
