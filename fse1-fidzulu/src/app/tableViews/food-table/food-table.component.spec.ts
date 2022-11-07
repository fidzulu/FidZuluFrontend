import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FoodTableComponent } from './food-table.component';

describe('FoodTableComponent', () => {
  let component: FoodTableComponent;
  let fixture: ComponentFixture<FoodTableComponent>;
  let testFoodData: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FoodTableComponent],
    }).compileComponents();
  }));

  it('should contain a table', () => {
    component.food = [
      {
        name: 'The Original Sandwich',
        brand: 'Oreo',
        weight: '303g',
        calories: 405,
        price: 2.85,
      },
      {
        name: 'Peanut Butter',
        brand: 'KRAFT',
        weight: '2000g',
        calories: 726,
        price: 9.39,
      },
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector('table');
    //console.log(table);
    expect(table.rows.length).toBe(2);
    expect(table.rows[0].cells[0].textContent).toBe('The Original Sandwich');
    expect(table.rows[1].cells[0].textContent).toBe('Peanut Butter');
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
