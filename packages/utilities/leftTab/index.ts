export function leftTab(str: string, count: number, tabWidth: number): string {
  if (count < 1 || tabWidth < 1) return str
  const tab = ' '.repeat(tabWidth * count)
  const lines = str.match(/.*(?:\r\n|\n|$)/g) || []
  return lines
    .map((line) => (line.trim() ? tab + line : line)) // Prepend tab to lines, preserve line breaks
    .join('')
}
