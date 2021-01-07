import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperJournlItemsComponent } from './wallpaper-journl-items.component';

describe('WallpaperJournlItemsComponent', () => {
  let component: WallpaperJournlItemsComponent;
  let fixture: ComponentFixture<WallpaperJournlItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpaperJournlItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperJournlItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
