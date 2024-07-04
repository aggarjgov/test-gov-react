import {
  asCsvString,
  csvStringlToFile,
  isExcel,
  isValidExcel,
  trimCsvValues,
} from './file.utils'

describe('isValidExcel', () => {
  it('returns true for valid excel file with Applications sheet', async () => {
    // Mock File and read function to simulate a valid excel file
    const mockFile = new File([], 'test.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      arrayBuffer: jest.fn(),
    })
    const mockRead = jest
      .spyOn(require('xlsx'), 'read')
      .mockImplementation(() => ({
        Sheets: {
          Applications: {},
        },
      }))
    // Call isValidExcel with the mocked file
    const result = await isValidExcel(mockFile)
    // Expect result to be true
    expect(result).toBe(true)
    // Restore original implementation
    mockRead.mockRestore()
  })

  it('returns false for excel file without Applications sheet', async () => {
    // Mock File and read function to simulate an excel file without Applications sheet
    const mockFile = new File([], 'test.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    const mockRead = jest
      .spyOn(require('xlsx'), 'read')
      .mockImplementation(() => ({
        Sheets: {},
      }))
    // Call isValidExcel with the mocked file
    const result = await isValidExcel(mockFile)
    // Expect result to be false
    expect(result).toBe(false)
    // Restore original implementation
    mockRead.mockRestore()
  })
})

describe('isExcel', () => {
  it('returns true for excel file type', () => {
    const mockFile = new File([], 'test.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    const result = isExcel(mockFile)
    expect(result).toBe(true)
  })

  it('returns false for non-excel file type', () => {
    const mockFile = new File([], 'test.txt', { type: 'text/plain' })
    const result = isExcel(mockFile)
    expect(result).toBe(false)
  })
})

describe('csvStringlToFile', () => {
  it('converts CSV string to File', () => {
    const csvString = 'name,age\ntest,25'
    const result = csvStringlToFile(csvString)

    expect(result).toBeInstanceOf(File)
    expect(result.type).toBe('text/csv')
    expect(result.name).toMatch(/corruptedCSV\.csv$/)
  })
})

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
