import { Component, Input, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';

@Component({
  selector: 'app-bikes-table',
  templateUrl: './bikes-table.component.html',
  styleUrls: ['./bikes-table.component.css']
})
export class BikesTableComponent implements OnInit {
  @Input() bikes!: Bike[];

  headers: string[] = [ 'Name', 'Brand', 'Color', 'Price'];

  constructor() { }

  ngOnInit(): void {
  }

}
