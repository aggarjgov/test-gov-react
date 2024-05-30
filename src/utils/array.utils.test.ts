import { insertIf, isInternalLink } from '../utils/array.utils'

describe('insertIf', () => {
  it('should return an empty array if the condition is false', () => {
    const result = insertIf(false, 1, 2, 3)
    expect(result).toEqual([])
  })

  it('should return an array with the elements if the condition is true', () => {
    const result = insertIf(true, 1, 2, 3)
    expect(result).toEqual([1, 2, 3])
  })

  it('should return an empty array if no elements are provided', () => {
    const result = insertIf(true)
    expect(result).toEqual([])
  })
})

describe('isInternalLink', () => {
  it('should return true for internal links starting with "/"', () => {
    const result = isInternalLink('/about')
    expect(result).toBe(true)
  })

  it('should return true for internal links starting with "#"', () => {
    const result = isInternalLink('#section')
    expect(result).toBe(true)
  })

  it('should return false for external links starting with "http"', () => {
    const result = isInternalLink('http://example.com')
    expect(result).toBe(false)
  })

  it('should return false for external links starting with "www"', () => {
    const result = isInternalLink('www.example.com')
    expect(result).toBe(false)
  })

  it('should return false for empty string', () => {
    const result = isInternalLink('')
    expect(result).toBe(false)
  })
})
