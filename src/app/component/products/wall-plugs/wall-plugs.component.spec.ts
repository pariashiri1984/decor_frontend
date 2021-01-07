import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPlugsComponent } from './wall-plugs.component';

describe('WallPlugsComponent', () => {
  let component: WallPlugsComponent;
  let fixture: ComponentFixture<WallPlugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallPlugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPlugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
