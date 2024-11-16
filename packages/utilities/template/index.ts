type ExtractKeys<S extends string> = S extends `${string}{{${infer Key}}}${infer Rest}`
  ? Key | ExtractKeys<Rest>
  : never

type TemplateValues<S extends string> = Record<ExtractKeys<S>, string | number>

function template<S extends string>(strings: TemplateStringsArray) {
  return (values: TemplateValues<S>): string => {
    const template = strings.join('')

    // First handle escaped braces by temporarily replacing them
    const escapedTemplate = template
      .replace(/\\\{\\\{/g, '___ESCAPED_OPEN___')
      .replace(/\\\}\\\}/g, '___ESCAPED_CLOSE___')
      .replace(/\\\{/g, '___ESCAPED_SINGLE_OPEN___')
      .replace(/\\\}/g, '___ESCAPED_SINGLE_CLOSE___')

    // Validate template format
    const placeholderRegex = /{{([^}\s]+)}}/g
    const matches = [...escapedTemplate.matchAll(placeholderRegex)]

    // Check for malformed placeholders
    const invalidPlaceholder = escapedTemplate.match(/{{[^}]*\s+[^}]*}}/)
    if (invalidPlaceholder) {
      throw new Error('Invalid placeholder format: placeholders cannot contain whitespace')
    }

    const requiredKeys = matches.map((m) => m[1])
    const valueKeys = Object.keys(values)

    // Validate keys
    const missingKeys = requiredKeys.filter((key) => !(key in values))
    if (missingKeys.length > 0) {
      throw new Error(`Missing required keys: ${missingKeys.join(', ')}`)
    }

    const extraKeys = valueKeys.filter((key) => !requiredKeys.includes(key))
    if (extraKeys.length > 0) {
      throw new Error(`Unexpected keys provided: ${extraKeys.join(', ')}`)
    }

    // Validate values
    for (const [_, value] of Object.entries(values)) {
      if (value === null || value === undefined) {
        throw new Error('Template values cannot be null or undefined')
      }
    }

    // Replace all placeholders
    const result = Object.entries(values).reduce(
      (result, [key, value]) => result.replaceAll(`{{${key}}}`, String(value)),
      escapedTemplate
    )

    // Restore escaped braces
    return result
      .replace(/___ESCAPED_OPEN___/g, '{{')
      .replace(/___ESCAPED_CLOSE___/g, '}}')
      .replace(/___ESCAPED_SINGLE_OPEN___/g, '{')
      .replace(/___ESCAPED_SINGLE_CLOSE___/g, '}')
  }
}

export { template }
