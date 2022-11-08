import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path:"home", component: MainPageComponent},
  {path:"bikes", component: BikesDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
