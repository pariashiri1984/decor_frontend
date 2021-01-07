import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurtainComponent } from './component/products/curtain/curtain.component';
import { AllComponent } from './component/products/all/all.component';
import { IndexComponent } from './index/index.component';
import { FalseCeilingComponent } from './component/products/false-ceiling/false-ceiling.component';
import { FloorCoveringComponent } from './component/products/floor-covering/floor-covering.component';
import { ParquetComponent } from './component/products/parquet/parquet.component';
import { WallPlugsComponent } from './component/products/wall-plugs/wall-plugs.component';
import { WallpaperComponent } from './component/products/wallpaper/wallpaper.component';
import { PosterComponent } from './component/products/poster/poster.component';
import { KnaufComponent } from './component/products/knauf/knauf.component';
import { WallpaperSubCategoryComponent } from './component/products/wallpaper/wallpaper-sub-category/wallpaper-sub-category.component';
import { WallpaperJournlItemsComponent } from './component/products/wallpaper/wallpaper-journl-items/wallpaper-journl-items.component';
import { PosterItemsComponent } from './component/products/poster/poster-items/poster-items.component';
import { AboutComponent } from './component/about/about.component';


const routes: Routes = [
  { path: 'products',   component:AllComponent},
  { path: 'index',   component:IndexComponent},
  { path: 'curtain',   component:CurtainComponent},
  { path: 'falseceiling',   component:FalseCeilingComponent},
  { path: 'floor',   component:FloorCoveringComponent},
  { path: 'parquet',   component:ParquetComponent},
  {path:'wallplugs', component:WallPlugsComponent},
  {path:'wallpaper', component:WallpaperComponent},
  {path:'poster', component:PosterComponent},
  {path:'kanuf', component:KnaufComponent},
  {path:'wallpaper/category/:id', component: WallpaperSubCategoryComponent},
  {path:'poster/category/:id', component: PosterItemsComponent},
  {path:'journal', component:WallpaperJournlItemsComponent},
  {path:'about', component:AboutComponent},
  { path: '',   redirectTo: '/index', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: IndexComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
