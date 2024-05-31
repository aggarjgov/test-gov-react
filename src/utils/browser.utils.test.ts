import { warn } from './browser.utils'

describe('warn', () => {
  let consoleWarnSpy: jest.SpyInstance

  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()
  })

  afterEach(() => {
    consoleWarnSpy.mockRestore()
  })

  it('should print a warning message to the console', () => {
    const message = 'This is a warning message'
    warn(message)
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining(message),
      expect.anything(),
      expect.anything(),
      expect.anything()
    )
  })
})
