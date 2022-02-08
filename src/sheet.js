var SHEET_FILE = {
  name : 'file',
  row : {
    data : 3,
  },
  column : {
    name : 1,
  },
};

var SHEET_DRIVE = {
  name : 'drive',
  row : {
    data : 2,
  },
  column : {
    name : 1,
  },
};

function getHyperLink(text, url){
  return `=HYPERLINK("${url}", "${text}")`;
}

function refreshSheet(sheetName, outList, startColumn, startRow, spreadSheetId){

  if(!outList[0].length) return;
  const sheet = getSheet(sheetName, spreadSheetId);

  startRow = startRow ? startRow : 2;
  startColumn = startColumn ? startColumn : 1;
  sheet.getRange(startRow, startColumn, sheet.getLastRow(), outList[0].length).clear();
  sheet.getRange(startRow, startColumn, outList.length, outList[0].length).setValues(outList);
}

function getSheet(sheetName, spreadSheetId){
  const ss = (spreadSheetId !== undefined) ? SpreadsheetApp.openById(spreadSheetId) : SpreadsheetApp.getActive();
  return ss.getSheetByName(sheetName);
}