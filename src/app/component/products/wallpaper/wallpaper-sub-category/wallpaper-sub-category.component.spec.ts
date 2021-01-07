import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperSubCategoryComponent } from './wallpaper-sub-category.component';

describe('WallpaperSubCategoryComponent', () => {
  let component: WallpaperSubCategoryComponent;
  let fixture: ComponentFixture<WallpaperSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpaperSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
