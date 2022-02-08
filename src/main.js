function main() {

  const driveList = getDriveList();
  
  const outList = driveList.reduce((outList, drive) => {
    return outList.concat(drive.getOutListFileSheet());
  }, []);

  refreshSheet(
    SHEET_FILE.name,
    outList,
    SHEET_FILE.column.name,
    SHEET_FILE.row.data
  );

}
