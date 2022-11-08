import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/models/laptop';

@Component({
  selector: 'app-laptop-display',
  templateUrl: './laptop-display.component.html',
  styleUrls: ['./laptop-display.component.css']
})
export class LaptopDisplayComponent implements OnInit {
  laptops:Laptop[] = [
    {
      "product": "ThinkPad T430s",
      "brand": "Lenovo",
      "CPU": "core i5-3320",
      "memory": "8GB",
      "price": 325.09
    },
    {
      "product": "MacBook Air",
      "brand": "Apple",
      "CPU": "core i5 1.6GHz",
      "memory": "4GB",
      "price": 621.78
    },
    {
      "product": "Ideapad 330",
      "brand": "Lenovo",
      "CPU": "core i3-8130U",
      "memory": "4GB",
      "price": 459.98
    },
    {
      "product": "MacBook Pro",
      "brand": "Apple",
      "CPU": "core i5 2.5GHz",
      "memory": "4GB",
      "price": 2999.99
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
