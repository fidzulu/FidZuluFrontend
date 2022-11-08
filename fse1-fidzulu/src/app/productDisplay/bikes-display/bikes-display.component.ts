import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';

@Component({
  selector: 'app-bikes-display',
  templateUrl: './bikes-display.component.html',
  styleUrls: ['./bikes-display.component.css']
})
export class BikesDisplayComponent implements OnInit {

  bikes:Bike[] = [{
    "name": "Mamba Sport 12\" Balance Bike",
    "brand": "Mamba Bikes",
    "color": "black",
    "price": 75.88
  },
  {
    "name": "DJ Fat Bike 500W",
    "brand": "DJ Bikes",
    "color": "grey",
    "price": 1599.86
  },
  {
    "name": "Kobe Aluminum Balance",
    "brand": "Kobe",
    "color": "blue",
    "price": 88.56
  },
  {
    "name": "Pomona Men's Cruiser Bike",
    "brand": "Northwoods",
    "color": "silver",
    "price": 221.36
  }]

  constructor() { }
  ngOnInit(): void {

  }



}
