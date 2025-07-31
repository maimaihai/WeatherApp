import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart7Day } from './chart-7-day';

describe('Chart7Day', () => {
  let component: Chart7Day;
  let fixture: ComponentFixture<Chart7Day>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chart7Day]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chart7Day);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
