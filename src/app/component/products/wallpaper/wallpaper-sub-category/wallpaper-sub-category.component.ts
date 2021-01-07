import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WallpaperCategoryService } from 'src/app/Shared/wallpaper-category.service';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from 'src/app/Shared/file-upload.service';
import { WallpaperCategory } from 'src/app/Shared/wallpaper-category';
import { WallpaperJournal } from 'src/app/Shared/wallpaper-journal';
import { WallpaperJournalService } from 'src/app/Shared/wallpaper-journal.service';
import { WallpeparJournalItem } from 'src/app/Shared/wallpepar-journal-item';
import { WallpeparJournalItemService } from 'src/app/Shared/wallpepar-journal-item.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-wallpaper-sub-category',
  templateUrl: './wallpaper-sub-category.component.html',
  styleUrls: ['./wallpaper-sub-category.component.css']
})
export class WallpaperSubCategoryComponent implements OnInit {

  currentCategory:WallpaperCategory;
  currentId:number;
  journals:WallpaperJournal[];
  allItem:WallpeparJournalItem[];
  badges:string[]=[];
  url: string='';
  urlj: string='';
  altText:string='';
  constructor(private route: ActivatedRoute,
    public ws: WallpaperCategoryService,
    public wjs:WallpaperJournalService,
    public wji: WallpeparJournalItemService,
    private http: HttpClient,
    private renderer: Renderer2) { }


  ngOnInit(): void
  {

    this.currentCategory=new WallpaperCategory();

    this.currentId = this.route.snapshot.params.id;
    this.ws.getWallpaperCategory(this.currentId)
    .subscribe(
      (res)=> {
        this.currentCategory = res;
        this.urlj= environment.baseApiUrl
        +environment.imageServerURL
        +environment.wallPaperJournalImageUrl
        +'/';
        this.url = environment.baseApiUrl
        +environment.imageServerURL
        +environment.wallPaperCategoryImageUrl
        +'/'+this.currentCategory.ImageURL;
        this.altText = 'ژورنال کاغذ دیواری '+this.currentCategory.Title;
      }


    );

    this.wjs.getAllWallpaperJournal()
    .subscribe(
      (res)=>
      {
        this.journals= res;
        this.journals = this.journals.filter(
          (e)=>{
             return e.CategoryId ==  this.currentId
          });

        this.journals.forEach
        (e =>
          {
            this.wji.countJournalItem(e.Id)
            .subscribe(
              v=> this.badges.push(v['value'])
              //console.log('count is '+v['value']+ ' id is :'+e.Id))
            //console.log('id of: '+e.Id+' -- '+this.loadCountOfItem(e.Id));
            );
        });
      });

    }


}
