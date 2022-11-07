import { Component, Input, OnInit } from '@angular/core';
import { Toy } from 'src/app/models/toy';

@Component({
  selector: 'app-toy-table',
  templateUrl: './toy-table.component.html',
  styleUrls: ['./toy-table.component.css']
})
export class ToyTableComponent implements OnInit {
  @Input() toys!: Toy[];

  headers: string[] = [ 'Name', 'Brand', 'Age Group', 'Prize'];

  constructor() { }

  ngOnInit(): void {
  }

}
