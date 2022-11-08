import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyDisplayComponent } from './toy-display.component';

describe('ToyDisplayComponent', () => {
  let component: ToyDisplayComponent;
  let fixture: ComponentFixture<ToyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
