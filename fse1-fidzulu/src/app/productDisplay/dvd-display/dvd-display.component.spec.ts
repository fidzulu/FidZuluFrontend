import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdDisplayComponent } from './dvd-display.component';

describe('DvdDisplayComponent', () => {
  let component: DvdDisplayComponent;
  let fixture: ComponentFixture<DvdDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvdDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
