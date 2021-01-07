import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { BrandsComponent } from "./component/brands/brands.component";
import { ParallaxComponent } from './component/products/parallax/parallax.component';
import { ReadyComponent } from './component/ready/ready.component';
import { BranchComponent } from './component/branch/branch.component';
import { WallpaperComponent } from './component/products/wallpaper/wallpaper.component';
import { PosterComponent } from './component/products/poster/poster.component';
import { CurtainComponent } from './component/products/curtain/curtain.component';
import { FloorCoveringComponent } from './component/products/floor-covering/floor-covering.component';
import { ParquetComponent } from './component/products/parquet/parquet.component';
import { FalseCeilingComponent } from './component/products/false-ceiling/false-ceiling.component';
import { WallPlugsComponent } from './component/products/wall-plugs/wall-plugs.component';
import { KnaufComponent } from './component/products/knauf/knauf.component';
import { AllComponent } from './component/products/all/all.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from '@angular/common/http';
import { WallpaperSubCategoryComponent } from './component/products/wallpaper/wallpaper-sub-category/wallpaper-sub-category.component';
import { WallpaperJournlItemsComponent } from './component/products/wallpaper/wallpaper-journl-items/wallpaper-journl-items.component';
import { SidebarComponent } from './component/products/wallpaper/sidebar/sidebar.component';
import { PosterItemsComponent } from './component/products/poster/poster-items/poster-items.component';
import { AboutComponent } from './component/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    IndexComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    BrandsComponent,
    ParallaxComponent,
    ReadyComponent,
    BranchComponent,
    WallpaperComponent,
    PosterComponent,
    CurtainComponent,
    FloorCoveringComponent,
    ParquetComponent,
    FalseCeilingComponent,
    WallPlugsComponent,
    KnaufComponent,
    AllComponent,
    IndexComponent,
    WallpaperSubCategoryComponent,
    WallpaperJournlItemsComponent,
    SidebarComponent,
    PosterItemsComponent,
    AboutComponent
      ],
  exports:[],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
