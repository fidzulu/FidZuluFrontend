import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ToyTableComponent } from './toy-table.component';

describe('ToysTableComponent', () => {
  let component: ToyTableComponent;
  let fixture: ComponentFixture<ToyTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToyTableComponent],
    }).compileComponents();
  }));

  it('should contain a table', () => {
    component.toys = [
      {
        name: 'Medical Kit',
        brand: 'Fisher-Price',
        ageGroup: '3 to 9',
        prize: 20.41,
      },
      {
        name: 'Ferry Boat',
        brand: 'Green Toys',
        ageGroup: '3 to 6',
        prize: 13.26,
      },
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector('table');
    //console.log(table);
    expect(table.rows.length).toBe(2);
    expect(table.rows[0].cells[0].textContent).toBe('Medical Kit');
    expect(table.rows[1].cells[0].textContent).toBe('Ferry Boat');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
