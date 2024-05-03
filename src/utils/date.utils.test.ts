import { convertDateToDoubleDigits } from './date.utils'

describe('convertDateToDoubleDigits()', () => {
  it('should convert date to double digits format', () => {
    expect(convertDateToDoubleDigits('1/1/2022', 'DD/MM/YYYY')).toBe(
      '01/01/2022'
    )
    expect(convertDateToDoubleDigits('12/3/2023', 'DD/MM/YYYY')).toBe(
      '12/03/2023'
    )
    expect(convertDateToDoubleDigits('5/10/2024', 'DD/MM/YYYY')).toBe(
      '05/10/2024'
    )
  })

  it('should handle single digit day, month, and year', () => {
    expect(convertDateToDoubleDigits('9/9/2025', 'DD/MM/YYYY')).toBe(
      '09/09/2025'
    )
    expect(convertDateToDoubleDigits('6/7/2026', 'DD/MM/YYYY')).toBe(
      '06/07/2026'
    )
    expect(convertDateToDoubleDigits('2/8/2027', 'DD/MM/YYYY')).toBe(
      '02/08/2027'
    )
  })

  it('should handle empty date string', () => {
    expect(convertDateToDoubleDigits('', 'DD/MM/YYYY')).toBe('00/00/')
  })

  it('should handle different date format', () => {
    expect(convertDateToDoubleDigits('1/1/2022', 'MM/DD/YYYY')).toBe(
      '01/01/2022'
    )
    expect(convertDateToDoubleDigits('12/3/2023', 'MM/DD/YYYY')).toBe(
      '12/03/2023'
    )
    expect(convertDateToDoubleDigits('5/10/2024', 'MM/DD/YYYY')).toBe(
      '05/10/2024'
    )
  })
})
