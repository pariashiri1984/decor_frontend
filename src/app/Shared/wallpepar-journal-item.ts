export class WallpeparJournalItem {
  Id:number;
  WallpaperJournalId:number;
  ImgUrl:string;
  constructor(id?,jid?,img?){
    id?this.Id =id:this.Id=0;
    jid?this.WallpaperJournalId=jid:this.WallpaperJournalId=0;
    this.ImgUrl=img;
  }
}
