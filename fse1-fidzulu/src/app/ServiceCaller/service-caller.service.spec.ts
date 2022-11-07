import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { ServiceCaller } from './service-caller.service';
import { Food } from '../models/food';
import { Bike } from '../models/bike';
import { Toy } from '../models/toy';

describe('ServiceCaller', () => {
  let service: ServiceCaller;
  let httpTestingController: HttpTestingController;
  let testBikes: Bike[];
  let testFood: Food[];
  let testToys: Toy[];
  const lh = "http://localhost:3021";
  const bikeServiceUrl = "/classA/Bikes/all/Durham";
  const toyServiceUrl = "/classA/Toys/all/Raleigh";
  const foodServiceUrl = "/classA/Food/all/Durham";

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientTestingModule
    ]});
    service = TestBed.inject(ServiceCaller);
    httpTestingController = TestBed.inject(HttpTestingController);
    testBikes = [
      {
        "name": "Mamba Sport 12\" Balance Bike",
        "brand": "Mamba Bikes",
        "color": "black",
        "price": 75.88
      },
      {
        "name": "DJ Fat Bike 500W",
        "brand": "DJ Bikes",
        "color": "grey",
        "price": 1599.86
      },
    ];
    testFood = [
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
    testToys = [
        {
          "name": "Medical Kit",
          "brand": "Fisher-Price",
          "ageGroup": "3 to 9",
          "prize": 20.41
        },
        {
          "name": "Ferry Boat",
          "brand": "Green Toys",
          "ageGroup": "3 to 6",
          "prize": 13.26
        },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Get Bikes Data
  it('should return bikes', inject([ServiceCaller], fakeAsync((service: ServiceCaller) => {
    let bikes: Bike[] = [];
    service.getData(bikeServiceUrl).subscribe(data => bikes = data as any);
    const req = httpTestingController.expectOne(lh+bikeServiceUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(testBikes);
    httpTestingController.verify();
    tick();
    expect(bikes[0].name).toBe('Mamba Sport 12" Balance Bike');
  })));

  // Get Toys Data
  it('should return toys', inject([ServiceCaller], fakeAsync((service: ServiceCaller) => {
    let toys: Toy[] = [];
    service.getData(toyServiceUrl).subscribe(data => toys = data as any);
    const req = httpTestingController.expectOne(lh+toyServiceUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(testToys);
    httpTestingController.verify();
    tick();
    expect(toys[0].name).toBe('Medical Kit');
  })));

  // Get Food Data
  it('should return food', inject([ServiceCaller], fakeAsync((service: ServiceCaller) => {
    let food: Food[] = [];
    service.getData(foodServiceUrl).subscribe(data => food = data as any);
    const req = httpTestingController.expectOne(lh+foodServiceUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(testFood);
    httpTestingController.verify();
    tick();
    expect(food[0].name).toBe('The Original Sandwich');
  })));

  it('should handle a 404 error', inject([ServiceCaller], fakeAsync((service: ServiceCaller) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getData(bikeServiceUrl)
      .subscribe({
        next: () => fail('Should not succeed'),
        error: (e) => errorReply = e
      });
    const req = httpTestingController.expectOne(lh+bikeServiceUrl);
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Respond with error
    req.flush('Forced 404', {
      status: 404,
      statusText: 'Not Found'
    });
    // Assert that there are no outstanding requests.
    httpTestingController.verify();
    // Cause all Observables to complete and check the results
    tick();
    expect(errorReply).toBe('Unable to contact service; please try again later.');
    expect(errorHandlerSpy).toHaveBeenCalled();
    errorResp = errorHandlerSpy.calls.argsFor(0)[0];
    expect(errorResp.status).toBe(404);
  })));
});
