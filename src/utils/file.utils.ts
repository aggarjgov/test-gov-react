// Function to trim all values in a CSV string
export function trimCsvValues(csvString: string): string {
  // Split the CSV string into rows
  const rows = csvString.split('\n')

  // Map each row
  const trimmedRows = rows.map((row) => {
    // Split the row into values, trim each value, then join back with commas
    return row
      .split(',')
      .map((value) => value.trim())
      .join(',')
  })

  // Join the trimmed rows back into a single string with newline characters
  return trimmedRows.join('\n')
}
