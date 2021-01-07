import { Component, OnInit, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { WallpaperCategoryService } from 'src/app/Shared/wallpaper-category.service';
import { HttpClient } from '@angular/common/http';
import { SelectedWallpaperCategoryService } from 'src/app/Shared/selected-wallpaper-category.service';
import { FileUploadService } from 'src/app/Shared/file-upload.service';
import { FormBuilder } from '@angular/forms';
import { WallpaperCategory } from 'src/app/Shared/wallpaper-category';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {

  categories: WallpaperCategory[]=[];
  categoriesId: string[]=[];

  url:string;
  classString:string;
  constructor(public ws: WallpaperCategoryService,
    private http: HttpClient,
    private fileservice:FileUploadService) { }


  ngOnInit(): void {
    this.url = environment.baseApiUrl + environment.imageServerURL +
     environment.wallPaperCategoryImageUrl + '/';
    this.classString='col-lg-3 col-md-3 col-sm-4 col-6 isotope-item ';
    this.ws.getAllWallpaperCategory()
      .subscribe((data: WallpaperCategory[]) => {
        //console.log(data);
        this.categories = data;
       for(let i=0;i<data.length;i++){
        this.categoriesId[i] = '.'+data[i].Id ;
      }

      });


   }


}
