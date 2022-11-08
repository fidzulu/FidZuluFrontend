import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {
  foods:Food[] = [
    {
      "name": "The Original Sandwich",
      "brand": "Oreo",
      "weight": "303g",
      "calories": 405,
      "price": 2.85
    },
    {
      "name": "Peanut Butter",
      "brand": "KRAFT",
      "weight": "2000g",
      "calories": 726,
      "price": 9.39
    },
    {
      "name": "Beef Ravioli",
      "brand": "Chef Boyardee",
      "weight": "425g",
      "calories": 250,
      "price": 2.45
    },
    {
      "name": "Medium Cheddar Cheese",
      "brand": "MOON CHEESE",
      "weight": "57g",
      "calories": 525,
      "price": 5.87
    }]


  constructor() { }

  ngOnInit(): void {
  }

}
