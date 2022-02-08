class GoogleFile{
  constructor(file){
    this.file = file;
  }

  renameFile(){
    const name = this.file.getName();
    const rename = name.replace(' のコピー', '');
    if(rename === name) return;
    
    file.setName(rename);
  }

  getText(){
    return getHyperLink(this.file.getName(), this.file.getUrl());
  }
}
