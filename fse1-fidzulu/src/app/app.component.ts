import { Component } from '@angular/core';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';
import { BooksDisplayComponent } from './productDisplay/books-display/books-display.component';
import { ToyDisplayComponent } from './productDisplay/toy-display/toy-display.component';
import { BikesTableComponent } from './tableViews/bikes-table/bikes-table.component';
import { Router } from '@angular/router';
import { LaptopDisplayComponent } from './productDisplay/laptop-display/laptop-display.component';
import { Book } from './models/book';
import { DvdDisplayComponent } from './productDisplay/dvd-display/dvd-display.component';
import { FoodDisplayComponent } from './productDisplay/food-display/food-display.component';

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
  constructor(private bike: BikesDisplayComponent, private router: Router,
    private laptop: LaptopDisplayComponent, private book: BooksDisplayComponent,
    private food: FoodDisplayComponent,
    private toy: ToyDisplayComponent, private dvd: DvdDisplayComponent) {
    this.value = 'Raleigh';

  }
  ngOnInit() {
    this.value = 'Raleigh';
  }

  getVal(val: string) {
    console.log(val)
    this.value = val;
    console.log(this.router.url);
    if (this.router.url == "/bikes") {//3031
      this.bike.getData(val);
    }
    else if (this.router.url == "/toys") {//3033
      this.toy.getData(val);
    }
    else if (this.router.url == "/laptops") { //3036
      this.laptop.getData(val);
    }
    else if (this.router.url == "/books") { //3034
      this.laptop.getData(val);
    }
    else if (this.router.url == "/dvd") {
      console.log("in app rg");
      if (val == "Durham") {
        console.log("in app");
        this.dvd.getData("IN");
      }
      else {
        this.dvd.getData("IE");
      }

    }
    else if (this.router.url == "/foods") { //3034
      this.food.getData(val);
    }


  }

  returnVal() {
    return this.value;
  }
}
