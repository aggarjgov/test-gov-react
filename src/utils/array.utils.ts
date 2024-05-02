export const insertIf = (condition: boolean, ...elements: unknown[]) =>
  condition ? elements : []

// function to check if links is internal or external
export const isExternalLink = (url: string): boolean =>
  url.startsWith('http') || url.startsWith('www')

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
