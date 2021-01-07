export class Poster {
  Id:number;
  CategoryId:number;
  ImgUrl:string;
  constructor(id?,jid?,img?){
    id?this.Id =id:this.Id=0;
    jid?this.CategoryId=jid:this.CategoryId=0;
    this.ImgUrl=img;
  }
}
