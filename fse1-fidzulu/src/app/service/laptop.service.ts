import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptop } from '../models/laptop';
import { Toy } from '../models/toy';

const url = 'http://localhost:3036/laptops/all/';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private client: HttpClient) { }

  getAllBikes(val:string): Observable<Laptop[]> {

    // var val = this.comp.returnVal();
     return this.client.get<Laptop[]>(url + val);
   }
}
