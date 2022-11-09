import { Component, OnInit } from '@angular/core';
import { Dvd } from 'src/app/models/dvd';
import { DvdService } from 'src/app/service/dvd.service';

@Component({
  selector: 'app-dvd-display',
  templateUrl: './dvd-display.component.html',
  styleUrls: ['./dvd-display.component.css']
})
export class DvdDisplayComponent implements OnInit {
  dvds:Dvd[] = []
  constructor(private service: DvdService) { }

  ngOnInit(): void {
    this.getData("IN");
  }

  getData(val:string) {
    
    this.service.getAllBikes(val).subscribe(data=>{
      console.log(data);
      this.dvds = data
    });

}
}
