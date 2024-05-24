import { capitalizeFirstLetter } from './string.utils'

describe('capitalizeFirstLetter', () => {
  it.each`
    input        | expected
    ${'hello'}   | ${'Hello'}
    ${'world'}   | ${'World'}
    ${'foo bar'} | ${'Foo bar'}
    ${'123'}     | ${'123'}
    ${'!@#$'}    | ${'!@#$'}
    ${''}        | ${''}
  `('should capitalize the first letter of "$input"', ({ input, expected }) => {
    const result = capitalizeFirstLetter(input)
    expect(result).toBe(expected)
  })
})
