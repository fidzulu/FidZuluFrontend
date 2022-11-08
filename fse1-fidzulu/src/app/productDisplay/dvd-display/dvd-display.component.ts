import { Component, OnInit } from '@angular/core';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-display',
  templateUrl: './dvd-display.component.html',
  styleUrls: ['./dvd-display.component.css']
})
export class DvdDisplayComponent implements OnInit {
  dvds:Dvd[] = [{
    "title": "Avengers - Infinity War",
    "mpaa_rating": "PG-13",
    "studio": "MARVEL",
    "time": 149,
    "price": 18.55
  },
  {
    "title": "Spider-Man Homecoming",
    "mpaa_rating": "14 and over",
    "studio": "Sony Pictures Home Entertainment",
    "time": 133,
    "price": 7.23
  },
  {
    "title": "Ant-Man",
    "mpaa_rating": "PG-13",
    "studio": "Walt Disney Video",
    "time": 117,
    "price": 19.98
  },
  {
    "title": "Captain America",
    "mpaa_rating": "PG",
    "studio": "Walt Disney Video",
    "time": 123,
    "price": 24.88
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
