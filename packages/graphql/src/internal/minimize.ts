// http://spec.graphql.org/draft
// - ignore strings: http://spec.graphql.org/draft/#sec-String-Value
// - minify block strings: hhttp://spec.graphql.org/draft/#sec-String-Value.Block-Strings
// - remove comment lines: http://spec.graphql.org/draft/#sec-Comments
// - remove whitespace around punctuators: http://spec.graphql.org/draft/#sec-Punctuators
// - collapse whitespace: http://spec.graphql.org/draft/#sec-White-Space

// Shared variables used during gql document processing
let position = 0
let char: string
let string: string

const isWhitespace = (char: string): boolean => ' \t\n\r,'.includes(char)

const isPunctuator = (char: string): boolean => '!|$&():=@[]{}.'.includes(char)

const isCommentStart = (char: string): boolean => char === '#'

const isQuatationMark = (char: string): boolean => char === '"'

const isEscapedQuotation = (char: string): boolean =>
  char === '\\' && isQuatationMark(string[position])

// eslint-disable-next-line no-return-assign
const isLineEnding = (char: string): boolean | number =>
  char === '\n' || (char === '\r' && string[position] === '\n' && (position += 1))

// eslint-disable-next-line no-return-assign
const isBlockString = (): false | number =>
  isQuatationMark(string[position]) && isQuatationMark(string[position + 1]) && (position += 2)

// http://spec.graphql.org/draft/#sec-Comments
const skipComment = (): void => {
  while (position < string.length && !isLineEnding(string[position++])) {
    // Just skipping through
  }
}

const collapseWhitespace = (to: string): string => {
  // Find first non whitespace char
  while (position < string.length && isWhitespace(string[position])) {
    position++
  }

  // Whitepace around punctuators can be removed
  if (isPunctuator(string[position])) {
    return string[position++] + collapseWhitespace('')
  }

  // Ignore comments
  if (isCommentStart(string[position])) {
    skipComment()
    return collapseWhitespace(to)
  }

  // '"' do not need a space before them
  if (isQuatationMark(string[position])) {
    return ''
  }

  return to
}

// - http://spec.graphql.org/draft/#sec-String-Value
const extractBlockString = (): string => {
  let buffer = ''

  while (position < string.length) {
    char = string[position++]

    if (isQuatationMark(char)) {
      if (isBlockString()) {
        break
      }

      buffer += '\\' + char
    } else {
      buffer += char

      if (isEscapedQuotation(char)) {
        buffer += string[position++]
      }
    }
  }

  // Strip leading and trailing empty lines
  const lines = buffer.replace(/^(?:\s*\r?\n)*|(?:\r?\n\s*)*$/g, '').split(/\r?\n/)

  // Find common whitespace prefix
  // eslint-disable-next-line unicorn/no-reduce
  const indent = lines.reduce((current, line) => {
    // Due to formatting empty lines may have no indentation at all
    if (!line) return current

    let i = 0
    while (isWhitespace(line[i]) && current[i] === line[i]) {
      i += 1
    }

    return current.slice(0, i)
  }, /^(\s*)/.exec(lines[0])?.[1] || '').length

  // Strip the common whitespace prefix
  return lines.map((line) => line.slice(indent)).join('\n')
}

const extractString = (): string => {
  let buffer = ''

  while (position < string.length) {
    char = string[position++]

    if (isQuatationMark(char)) {
      break
    }

    buffer += char

    if (isEscapedQuotation(char)) {
      buffer += string[position++]
    }
  }

  return buffer
}

export const minimize = (gql: string): string => {
  position = 0
  string = gql
  let buffer = ''

  while (position < string.length) {
    char = string[position++]

    if (isWhitespace(char)) {
      buffer += collapseWhitespace(' ')
    } else if (isCommentStart(char)) {
      skipComment()
    } else {
      buffer += char

      if (isPunctuator(char)) {
        buffer += collapseWhitespace('')
      } else if (isQuatationMark(char)) {
        buffer += (isBlockString() ? extractBlockString() : extractString()) + char
      }
    }
  }

  return buffer.trim()
}
