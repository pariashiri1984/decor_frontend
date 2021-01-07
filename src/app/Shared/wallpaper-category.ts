import { environment } from 'src/environments/environment';

export class WallpaperCategory {
  Id :number;
  public Title : string;
  public ImageURL :string;

  constructor(title?:string){
    this.Id=0;
    this.Title= title || '';
    this.ImageURL ='';
  }
  toString():string{
    return (`Id = ${this.Id}, title= ${this.Title}, imagURL= ${this.ImageURL}`);
  }

}
