import { insertIf, isExternalLink, isInternalLink } from './array.utils'

describe('insertIf()', () => {
  it.each([
    [true, 1, 2, 3], // Condition is true
    [false], // Condition is false
  ])(
    'insertIf returns correct result when condition is %p',
    (condition, ...elements) =>
      expect(insertIf(condition, ...elements)).toEqual(
        condition ? elements : []
      )
  )
})

describe('isExternalLink()', () => {
  it("should return true for external links starting with 'http'", () => {
    expect(isExternalLink('http://example.com')).toBe(true)
    expect(isExternalLink('https://example.com')).toBe(true)
  })

  it("should return true for external links starting with 'www'", () => {
    expect(isExternalLink('www.example.com')).toBe(true)
  })

  it('should return false for non-external links', () => {
    expect(isExternalLink('/path/to/page')).toBe(false)
    expect(isExternalLink('example.com')).toBe(false)
  })
})
describe('isInternalLink()', () => {
  it('should return true for internal links starting with "/"', () => {
    expect(isInternalLink('/path/to/page')).toBe(true)
    expect(isInternalLink('/#section')).toBe(true)
  })

  it('should return false for external links', () => {
    expect(isInternalLink('http://example.com')).toBe(false)
    expect(isInternalLink('https://example.com')).toBe(false)
    expect(isInternalLink('www.example.com')).toBe(false)
  })

  it('should return false for non-link strings', () => {
    expect(isInternalLink('example.com')).toBe(false)
    expect(isInternalLink('123')).toBe(false)
    expect(isInternalLink('')).toBe(false)
  })
})
