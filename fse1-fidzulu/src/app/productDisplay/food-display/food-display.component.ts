import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})

export class FoodDisplayComponent implements OnInit {
  foods:Food[] = [
   ]


  constructor(private service: FoodService) { }

  ngOnInit(): void {
    this.getData("Durham");
  }

  getData(val:string) {
    
    this.service.getAllBikes(val).subscribe(data=>{
      console.log(data);
      this.foods = data
    });

}
}
