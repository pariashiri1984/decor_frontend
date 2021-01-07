import { Component, OnInit } from '@angular/core';
import { WallpaperCategoryService } from 'src/app/Shared/wallpaper-category.service';
import { HttpClient } from '@angular/common/http';
import { WallpaperCategory } from 'src/app/Shared/wallpaper-category';
import { environment } from 'src/environments/environment';
import { PosterService } from 'src/app/Shared/poster.service';
import { PosterCategory } from 'src/app/Shared/poster-category';
import { PosterCategoryService } from 'src/app/Shared/poster-category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories: WallpaperCategory[];
  categoriesId: string[]=[];

  posterCats: PosterCategory[];
  posterCategoriesId: string[]=[];


  url:string;
  urlp:string;
  constructor(public ws: WallpaperCategoryService,
    private pcs:PosterCategoryService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.url = environment.baseApiUrl + environment.imageServerURL + environment.wallPaperCategoryImageUrl + '/';
    this.urlp = environment.baseApiUrl + environment.imageServerURL + environment.PosterCategoryImageUrl + '/';

    this.pcs.getAllPosterCategory()
    .subscribe((data: PosterCategory[]) => {

      this.posterCats = data;

    });


    this.ws.getAllWallpaperCategory()
    .subscribe((data: WallpaperCategory[]) => {

      this.categories = data;

    });
  }

}
