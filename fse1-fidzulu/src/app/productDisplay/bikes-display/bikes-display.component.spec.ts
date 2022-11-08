import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesDisplayComponent } from './bikes-display.component';

describe('BikesDisplayComponent', () => {
  let component: BikesDisplayComponent;
  let fixture: ComponentFixture<BikesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
