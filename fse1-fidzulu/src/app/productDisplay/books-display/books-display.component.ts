import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css']
})
export class BooksDisplayComponent implements OnInit {
  books:Book[] = []

  constructor(private ervice: BookService) { }
  ngOnInit(): void {
    this.getData('Durham');

  }

  getData(val:string) {
    
    this.ervice.getAllBikes(val).subscribe(data=>{
      console.log(data);
      this.books = data
    });}


}
