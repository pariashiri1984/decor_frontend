import { Component, OnInit, Renderer2 } from '@angular/core';
import { PosterCategory } from 'src/app/Shared/poster-category';
import { PosterCategoryService } from 'src/app/Shared/poster-category.service';
import { environment } from 'src/environments/environment';
import { WallpaperCategory } from 'src/app/Shared/wallpaper-category';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  postercats: PosterCategory[];
  categoriesId: string[]=[];

  url:string;
  classString:string;
  item:string;
  ti:number=0;
  c:any=0;
  constructor(public pcs: PosterCategoryService,private renderer: Renderer2) { }


  renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }


  ngOnInit(): void {
    this.renderExternalScript('assets/plugins/ini.isotope.js').onload=()=>{};
    this.url = environment.baseApiUrl + environment.imageServerURL + environment.PosterCategoryImageUrl + '/';
    //console.log(this.url);
    this.classString='col-lg-3 col-md-3 col-sm-4 col-6 ';
    this.item= ' isotope-item';
    this.pcs.getAllPosterCategory()
      .subscribe((data: PosterCategory[]) => {


        this.postercats = data;
      for(let i=0;i<data.length;i++){
        this.categoriesId[i] = '.'+data[i].Id ;
      }
      });



    }



}
