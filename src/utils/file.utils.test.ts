import { trimCsvValues } from './file.utils'

describe('trimCsvValues', () => {
  it('trim leading and trailing spaces from values', () => {
    const inputCsv = ' name, age ,city \nJohn Doe, 28 ,New York'
    const expectedCsv = 'name,age,city\nJohn Doe,28,New York'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('wont trim commas inside quotes', () => {
    const inputCsv =
      ' name, age ,city,date\nJohn Doe, 28 ,New York,"Jan 1, 2021"'
    const expectedCsv = 'name,age,city,date\nJohn Doe,28,New York,"Jan 1, 2021"'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('handle empty values correctly', () => {
    const inputCsv = 'name,age,city\n,,'
    const expectedCsv = 'name,age,city\n,,'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('not alter rows without spaces', () => {
    const inputCsv = 'name,age,city\nJohn Doe,28,New York'
    const expectedCsv = 'name,age,city\nJohn Doe,28,New York'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('handle csv with only spaces correctly', () => {
    const inputCsv = ' , , \n , , '
    const expectedCsv = ',,\n,,'
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })

  it('handle csv with no values correctly', () => {
    const inputCsv = ''
    const expectedCsv = ''
    expect(trimCsvValues(inputCsv)).toEqual(expectedCsv)
  })
})
