import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyAskQueComponent } from './frequently-ask-que.component';

describe('FrequentlyAskQueComponent', () => {
  let component: FrequentlyAskQueComponent;
  let fixture: ComponentFixture<FrequentlyAskQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentlyAskQueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyAskQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
