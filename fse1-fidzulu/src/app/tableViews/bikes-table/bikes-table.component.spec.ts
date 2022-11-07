import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ToyTableComponent } from '../toy-table/toy-table.component';
import { BikesTableComponent } from './bikes-table.component';

describe('BikesTableComponent', () => {
  let component: BikesTableComponent;
  let fixture: ComponentFixture<BikesTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BikesTableComponent],
    }).compileComponents();
  }));

  it('should contain a table', () => {
    component.bikes = [
      {
        name: 'Mamba Sport 12" Balance Bike',
        brand: 'Mamba Bikes',
        color: 'black',
        price: 75.88,
      },
      {
        name: 'DJ Fat Bike 500W',
        brand: 'DJ Bikes',
        color: 'grey',
        price: 1599.86,
      },
    ];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    const table = compiled.querySelector('table');
    console.log(table);
    expect(table?.rows.length).toBe(2);
    expect(table?.rows[0].cells[0].textContent).toBe(
      'Mamba Sport 12" Balance Bike'
    );
    expect(table?.rows[1].cells[0].textContent).toBe('DJ Fat Bike 500W');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
