import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';

const routes: Routes = [{path:"bikes", component: BikesDisplayComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
