import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorCoveringComponent } from './floor-covering.component';

describe('FloorCveringComponent', () => {
  let component: FloorCoveringComponent;
  let fixture: ComponentFixture<FloorCoveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorCoveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorCoveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
