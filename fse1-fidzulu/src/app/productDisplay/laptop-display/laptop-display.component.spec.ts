import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDisplayComponent } from './laptop-display.component';

describe('LaptopDisplayComponent', () => {
  let component: LaptopDisplayComponent;
  let fixture: ComponentFixture<LaptopDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
