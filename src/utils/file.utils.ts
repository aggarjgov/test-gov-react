export function trimCsvValues(csvString: string): string {
  // Placeholder for commas inside quotes
  const placeholder = '\u{F8FF}' // Use a character unlikely to be in the input

  // Split the CSV string into rows
  const rows = csvString.split('\n')

  // Map each row
  const trimmedRows = rows.map((row) => {
    // Replace commas inside quotes with a placeholder
    const rowWithPlaceholders = row.replace(/"([^"]*)"/g, (match) => {
      return match.replace(/,/g, placeholder)
    })

    // Split the row into values, trim each value, then join back with commas
    const trimmedRow = rowWithPlaceholders
      .split(',')
      .map((value) => value.trim())
      .join(',')

    // Restore commas inside quotes by replacing placeholders
    return trimmedRow.replace(new RegExp(placeholder, 'g'), ',')
  })

  // Join the trimmed rows back into a single string with newline characters
  return trimmedRows.join('\n')
}
