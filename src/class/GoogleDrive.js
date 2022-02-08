class GoogleDrive{
  constructor(teamDrive){
    this.teamDrive = teamDrive;
  }

  getLink(){
    return getHyperLink(this.teamDrive.name, `https://drive.google.com/drive/folders/${this.teamDrive.id}`);
  }

  getMember(){
    // TODO
    getMemberList(this.teamDrive.id);
  }

  getOutListFileSheet(){

    return getGoogleFolderList(this.teamDrive.id).reduce((outList, googleFolder) => {
      const pathList = [googleFolder];
      return outList.concat(googleFolder.getOutList(pathList, this.getLink())); 
    }, []);
  }

  getOutListDriveSheet(){
    return [
      this.getLink()
    ];
  }
}
