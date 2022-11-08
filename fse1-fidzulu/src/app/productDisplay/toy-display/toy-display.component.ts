import { Component, OnInit } from '@angular/core';
import { Toy } from 'src/app/models/toy';
import { ToyService } from 'src/app/service/toy.service';

@Component({
  selector: 'app-toy-display',
  templateUrl: './toy-display.component.html',
  styleUrls: ['./toy-display.component.css']
})
export class ToyDisplayComponent implements OnInit {
  toys:Toy[] =[]
  constructor(private toySer: ToyService) { }

  ngOnInit(): void {
    this.getData('Durham');
  }

  
  getData(val:string) {
    
    this.toySer.getAllBikes(val).subscribe(data=>{
      console.log(data);
      this.toys = data
    });
   
}

}
