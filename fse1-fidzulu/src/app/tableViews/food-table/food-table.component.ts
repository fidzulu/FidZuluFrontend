import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent implements OnInit {
  @Input() food!: Food[];

  headers: string[] = [ 'Name', 'Brand', 'Weight', 'Calories', 'Price'];

  constructor() { }

  ngOnInit(): void {
  }

}
