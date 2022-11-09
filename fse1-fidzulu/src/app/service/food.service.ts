import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

const url = 'http://localhost:3032/food/all/';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private client: HttpClient) { }

  getAllBikes(val:string): Observable<Food[]> {
    //params.append('location',val);
    // var val = this.comp.returnVal();
    console.log(url+val);
     return this.client.get<Food[]>(url+val);}
}
