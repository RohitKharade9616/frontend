import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilsCategoriesComponent } from './oils-categories.component';

describe('OilsCategoriesComponent', () => {
  let component: OilsCategoriesComponent;
  let fixture: ComponentFixture<OilsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OilsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
