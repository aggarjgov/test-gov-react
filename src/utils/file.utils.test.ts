import { trimCsvValues } from './file.utils'

describe('trimCsvValues', () => {
  it('should trim leading and trailing spaces from values', () => {
    const inputCsv = ' name, age ,city \nJohn Doe, 28 ,New York'
    const expectedCsv = 'name,age,city\nJohn Doe,28,New York'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('should handle empty values correctly', () => {
    const inputCsv = 'name,age,city\n,,'
    const expectedCsv = 'name,age,city\n,,'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('should not alter rows without spaces', () => {
    const inputCsv = 'name,age,city\nJohn Doe,28,New York'
    const expectedCsv = 'name,age,city\nJohn Doe,28,New York'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('should handle csv with only spaces correctly', () => {
    const inputCsv = ' , , \n , , '
    const expectedCsv = ',,\n,,'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('should handle csv with no values correctly', () => {
    const inputCsv = ''
    const expectedCsv = ''
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })
})
