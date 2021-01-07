import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnaufComponent } from './knauf.component';

describe('KnaufComponent', () => {
  let component: KnaufComponent;
  let fixture: ComponentFixture<KnaufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnaufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
