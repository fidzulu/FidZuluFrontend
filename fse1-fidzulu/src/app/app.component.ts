import { Component } from '@angular/core';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';
import { BooksDisplayComponent } from './productDisplay/books-display/books-display.component';
import { BikesTableComponent } from './tableViews/bikes-table/bikes-table.component';

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
  constructor(private bike:BikesDisplayComponent) {
    this.value = 'Raleigh';

  }
  ngOnInit() {
    this.value = 'Raleigh';
  }

  getVal(val: string) {
    console.log(val)
    this.value = val;
    this.bike.getData(val);

  }

  returnVal() {
    return this.value;
  }
}
