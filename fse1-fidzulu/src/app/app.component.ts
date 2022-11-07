import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly title: string = 'FidZulu';
  readonly currDate: string = `${
    new Date().getMonth() + 1
  }/${new Date().getDate()}/${new Date().getFullYear()}`;
  readonly frontendTeam: String[] = [
    ' Arion Askins',
    ' Mohamed Gueye',
    ' Saivion Hayes',
    ' Thomas Babic',
  ];
}
