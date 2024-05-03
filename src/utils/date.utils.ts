// function to convert a date in string format of DD/MM/YYYY to ensure DD and MM is converted to  double digits if in single digit
export const convertDateToDoubleDigits = (
  date: string,
  format: string
): string => {
  const [day, month, year] = date.split('/')
  const formattedDate = format
    .replace('DD', day.padStart(2, '0'))
    .replace('MM', month.padStart(2, '0'))
    .replace('YYYY', year)
  return formattedDate
}
