
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Bike } from '../models/bike';

const url = 'http://localhost:3031/bikes/all/';
@Injectable({
  providedIn: 'root'
})

export class BikeService {

  constructor(private client: HttpClient) { }



  getAllBikes(val:string): Observable<Bike[]> {

   // var val = this.comp.returnVal();
    return this.client.get<Bike[]>(url + val);
  }

  
}