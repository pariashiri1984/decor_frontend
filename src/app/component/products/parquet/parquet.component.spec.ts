import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquetComponent } from './parquet.component';

describe('ParquetComponent', () => {
  let component: ParquetComponent;
  let fixture: ComponentFixture<ParquetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParquetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
