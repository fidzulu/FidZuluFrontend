import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

const url = 'http://localhost:3034/books/all/';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private client: HttpClient) { }

  getAllBikes(val:string): Observable<Book[]> {

    // var val = this.comp.returnVal();
     return this.client.get<Book[]>(url + val);}
  
}
