import { read, utils } from "xlsx";

export const excelType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

export const isValidExcel = async (file: File): Promise<boolean> =>
  !!read(await file.arrayBuffer())?.Sheets?.Applications;

export const isExcel = (file: File): boolean => file.type === excelType;

export const asCsvString = async (file: File): Promise<string> => {
  if (isExcel(file)) {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = read(arrayBuffer);
    return utils.sheet_to_csv(workbook.Sheets.Applications);
  }

  return await file.text();
};

export const csvStringlToFile = (csv: string): File => {
  const filename = "corruptedCSV"; //new Date().getTime();
  const type = "text/csv";
  const blob = new Blob([csv], { type });
  const file = new File([blob], `${filename}.csv`, { type });
  return file;
};

// Function to trim all values in a CSV string
export function trimCsvValues(csvString: string): string {
  // Placeholder for commas inside quotes
  const placeholder = "\u{F8FF}"; // Use a character unlikely to be in the input

  // Split the CSV string into rows
  const rows = csvString.split("\n");

  // Map each row
  const trimmedRows = rows.map((row) => {
    // Replace commas inside quotes with a placeholder
    const rowWithPlaceholders = row.replace(/"([^"]*)"/g, (match) => {
      return match.replace(/,/g, placeholder);
    });

    // Split the row into values, trim each value, then join back with commas
    const trimmedRow = rowWithPlaceholders
      .split(",")
      .map((value) => value.trim())
      .join(",");

    // Restore commas inside quotes by replacing placeholders
    return trimmedRow.replace(new RegExp(placeholder, "g"), ",");
  });

  // Join the trimmed rows back into a single string with newline characters
  return trimmedRows.join("\n");
}
