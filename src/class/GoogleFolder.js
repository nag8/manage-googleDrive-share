class GoogleFolder{
  constructor(folder,  subGoogleFolderList){
    this.folder = folder;
    this.subGoogleFolderList = subGoogleFolderList;
  }

  isExistSubFolder(){
    return this.subGoogleFolderList.length > 0;
  }
  
  getText(){
    return getHyperLink(this.folder.getName(), this.folder.getUrl());
  }

  getOutList(pathList, teamDriveLink){

    const fileList = getFileList(this.folder);
    
    const outList = fileList.map(file => {
      const googleFile = new GoogleFile(file);

      const pathOutList = [...Array(20)].map((_, index) => {
        return pathList[index] === undefined ? '-' : pathList[index].getText();
      });
      return [
        googleFile.getText()
      ].concat(
        teamDriveLink,
        pathOutList
      );
    });


    return outList.concat(
      this.subGoogleFolderList.reduce((outList, subGoogleFolder) => {
        return outList.concat(
          subGoogleFolder.getOutList(pathList.concat(subGoogleFolder), teamDriveLink)
        );
      }, [])
    );

  }
}
