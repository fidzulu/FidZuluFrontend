import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
const url = 'http://localhost:3035/dvds/?location=';
let params = new HttpParams();

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  
  
  constructor(private client: HttpClient) { }

  getAllBikes(val:string): Observable<Dvd[]> {
    params.append('location',val);
    // var val = this.comp.returnVal();
    console.log(url+val);
     return this.client.get<Dvd[]>(url+val);}
    
     
  }

