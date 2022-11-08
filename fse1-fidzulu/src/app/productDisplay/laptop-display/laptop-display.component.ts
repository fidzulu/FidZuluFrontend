import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/models/laptop';
import { LaptopService } from 'src/app/service/laptop.service';

@Component({
  selector: 'app-laptop-display',
  templateUrl: './laptop-display.component.html',
  styleUrls: ['./laptop-display.component.css']
})
export class LaptopDisplayComponent implements OnInit {
  laptops:Laptop[] = [
    ]

  constructor(private lapSer: LaptopService) { }

  ngOnInit(): void {
    this.getData('Durham');
  }

  getData(val:string) {
    
    this.lapSer.getAllBikes(val).subscribe(data=>{
      console.log(data);
      this.laptops = data
    });

}

}