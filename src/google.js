function getDriveList(){
  const teamDriveList = Drive.Teamdrives.list().items;
  return teamDriveList.map(teamDrive => new GoogleDrive(teamDrive));
}

function getMemberList(driveId){
  const memberList = Drive.Permissions.list(driveId).items;
  memberList.forEach(m => {
    Logger.log([
      m.role,
      m.emailAddress
    ]);
  });
}

function getGoogleFolderList(folderId){
  let folderList = [];
  const folders = DriveApp.getFolderById(folderId).getFolders();
  while(folders.hasNext()){
    const folder = folders.next();
    const googleFolder = new GoogleFolder(
      folder,
      getGoogleFolderList(folder.getId()),

    );
    folderList.push(googleFolder);
  }
  return folderList;
}

function getFileList(folder){
  const fileList = [];
  const files = folder.getFiles();
  while(files.hasNext()){
    fileList.push(files.next());
  }
  return fileList;
}
