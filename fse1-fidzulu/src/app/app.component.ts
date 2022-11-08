import { Component } from '@angular/core';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';
import { BooksDisplayComponent } from './productDisplay/books-display/books-display.component';
import { ToyDisplayComponent } from './productDisplay/toy-display/toy-display.component';
import { BikesTableComponent } from './tableViews/bikes-table/bikes-table.component';
import { Router } from '@angular/router';
import { LaptopDisplayComponent } from './productDisplay/laptop-display/laptop-display.component';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly title: string = 'FidZulu';
  readonly currDate: string = `${new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getFullYear()}`;
  readonly frontendTeam: String[] = [
    ' Akilandeshwari R',
    ' Pavithra B',
    ' Rakshitha M',
    ' Sasmithaa V S',
    ' Sushmitha B R'
  ];
  
  value: string;
  constructor(private bike:BikesDisplayComponent, private router: Router,
              private laptop: LaptopDisplayComponent, private book: BooksDisplayComponent,
            private toy: ToyDisplayComponent) {
    this.value = 'Raleigh';

  }
  ngOnInit() {
    this.value = 'Raleigh';
  }

  getVal(val: string) {
    console.log(val)
    this.value = val;
    if(this.router.url == "http://localhost:4200/bikes"){//3031
      this.bike.getData(val);
    }
    else if (this.router.url == "http://localhost:4200/toys"){//3033
      this.toy.getData(val);
    }
    else if (this.router.url == "http://localhost:4200/laptops"){ //3036
      this.laptop.getData(val);
    }
    else if (this.router.url == "http://localhost:4200/books"){ //3034
    this.laptop.getData(val);
  }
    

  }

  returnVal() {
    return this.value;
  }
}
