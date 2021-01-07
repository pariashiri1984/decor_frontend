export class WallpaperJournal {
  Id: number;
  CategoryId: number;
  Title: string;
  Describtion: string;
  Brand: string;
  Year: string;
  ImgUrl: string;
  constructor(){
    this.Id=0;
  this.CategoryId=0 ;
  this.Title=this.Describtion=this.Brand=this.Year=this.ImgUrl='';
  }
}

