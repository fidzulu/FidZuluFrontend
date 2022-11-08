import { Component, OnInit } from '@angular/core';
import { Toy } from 'src/app/models/toy';

@Component({
  selector: 'app-toy-display',
  templateUrl: './toy-display.component.html',
  styleUrls: ['./toy-display.component.css']
})
export class ToyDisplayComponent implements OnInit {
  toys:Toy[] =[{
    "name": "Medical Kit",
    "brand": "Fisher-Price",
    "ageGroup": "3 to 9",
    "prize": 20.41
  },
  {
    "name": "Ferry Boat",
    "brand": "Green Toys",
    "ageGroup": "3 to 6",
    "prize": 13.26
  },
  {
    "name": "Rock-a-Stack",
    "brand": "Fisher-Price",
    "ageGroup": "1 to 5",
    "prize": 5.99
  },
  {
    "name": "Stack Up Cups",
    "brand": "The First Years",
    "ageGroup": "0 to 3",
    "prize": 3.99
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
