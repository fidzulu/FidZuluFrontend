import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toy } from '../models/toy';

const url = 'http://localhost:3033/toys/all/';
@Injectable({
  providedIn: 'root'
  
})
export class ToyService {

  constructor(private client: HttpClient) { }

  
  getAllBikes(val:string): Observable<Toy[]> {

    // var val = this.comp.returnVal();
     return this.client.get<Toy[]>(url + val);
   }
}
