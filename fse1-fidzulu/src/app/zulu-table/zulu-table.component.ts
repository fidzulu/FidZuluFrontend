import { Component, OnInit } from '@angular/core';
import { Toy } from '../models/toy';
import { ServiceCaller } from '../ServiceCaller/service-caller.service';

export interface Btn {
  label: string,
  run: () => void,
  style?: "A" | "B",
  selected: boolean,
}

export interface DataTypeInt {
  value: string,
  run: () => void,
}

export interface TeamMemberResponse {
  team: string,
  membersNames: string[],
}

export type DataType = "Food" | "Bikes" | "Toys" | "Books" | "DVDs" | "Laptops";

@Component({
  selector: 'app-zulu-table',
  templateUrl: './zulu-table.component.html',
  styleUrls: ['./zulu-table.component.css']
})
export class ZuluTableComponent implements OnInit {

  objectList: any[] = [];
  currentDataType: DataType = "Food";
  currentLocation: "Raleigh" | "Durham" = "Raleigh";
  dataTeamMembers: String[] = [];

  locationButtons: Btn[] = [
    { label: "Raleigh", run: () => this.currentLocation = "Raleigh", selected: true },
    { label: "Durham", run: () => this.currentLocation = "Durham", selected: false },
  ];

  dataButtons: Btn[] = [
    { label: 'Get Food', run: () => this.getData("Food", "/classA/food"), selected: true },
    { label: 'Get Bikes', run: () => this.getData("Bikes", "/classA/bikes"), selected: false },
    { label: 'Get Toys', run: () => this.getData("Toys", "/classA/toys"), selected: false },
  ];

  constructor(private service: ServiceCaller) { }

  ngOnInit(): void {
    this.getData("Food", "/classA/food");
  }

  refreshView() {
    this.getData(this.currentDataType, `/classA/${this.currentDataType.toLowerCase()}`);
  }

  setSelectedDataBtn(button: Btn) {
    this.dataButtons = this.dataButtons.map(btn => { return { ...btn, selected: button.label === btn.label ? true : false }; });
  }

  setSelectedLocation(button: Btn) {
    this.locationButtons = this.locationButtons.map(btn => { return { ...btn, selected: button.label === btn.label ? true : false }; });
  }

  // rootPath should be something like "/classA/food"
  getData(dataType: DataType, rootPath: string) {
    this.currentDataType = dataType;
    const fullPath: string = rootPath + '/all' + `/${this.currentLocation}`;

    // fullPath example: "/classA/food/all/Raleigh"
    // fullPath rootPath + '/team' = "/classA/food/team" => get Food team members

    this.service.getData(fullPath).subscribe(data => this.objectList = data);
    this.service.getTeamMembers(rootPath + '/team').subscribe((data: TeamMemberResponse) => this.dataTeamMembers = data.membersNames);

    console.log("this.objectList", this.objectList);
  }

}
