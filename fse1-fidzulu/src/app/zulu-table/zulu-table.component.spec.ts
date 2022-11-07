import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ServiceCaller } from '../ServiceCaller/service-caller.service';
import { Food } from '../models/food';
import { ZuluTableComponent } from './zulu-table.component';

describe('ZuluTableComponent', () => {
  let component: ZuluTableComponent;
  let fixture: ComponentFixture<ZuluTableComponent>;
  const testFood: Food[] = [
    {
      name: "The Original Sandwich",
      brand: "Oreo",
      weight: "303g",
      calories: 405,
      price: 2.85
    },
    {
      name: "Peanut Butter",
      brand: "KRAFT",
      weight: "2000g",
      calories: 726,
      price: 9.39
    },
  ];

  // Create a fake ServiceCaller object
  let serviceCaller: any = jasmine.createSpyObj('ServiceCaller',['getData']);
  serviceCaller.getData.and.returnValue(of(testFood));
  let CallerServiceSpy: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuluTableComponent ],
      imports: [ HttpClientModule ],
      providers: [
        { provide: ServiceCaller, userValue: serviceCaller }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuluTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    CallerServiceSpy = serviceCaller.getData.and.callFake((path: any) => {
      return of(testFood);
    });

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have food data on init', () => {
    expect(component.currentDataType).toBe("Food");
    expect(component.objectList).toBeTruthy();
  });
});
