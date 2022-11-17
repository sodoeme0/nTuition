import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcostComponent } from './schoolcost.component';

describe('SchoolcostComponent', () => {
  let component: SchoolcostComponent;
  let fixture: ComponentFixture<SchoolcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolcostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
