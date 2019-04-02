const XLSX = require('xlsx');

export const readXlsToJson = (file, sheetindex = 0) => {
  const workbook = XLSX.readFile(file);

  /* Get worksheet */
  const worksheet = workbook.Sheets[workbook.SheetNames[sheetindex]];

  /* Find desired cell */
  // var desired_cell = worksheet['A1'];

  /* Get the value */
  // var desired_value = desired_cell ? desired_cell.v : undefined;
  // console.log(desired_value);

  const json = XLSX.utils.sheet_to_json(worksheet);
  // console.log(json[0]);
  return json;
};

export const readXlsToCsv = (file, sheetindex) => {
  const workbook = XLSX.readFile(file);
  const worksheet = workbook.Sheets[workbook.SheetNames[sheetindex]];
  const csv = XLSX.utils.sheet_to_csv(worksheet);
  return csv;
};
