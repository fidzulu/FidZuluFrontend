import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';
import { BooksDisplayComponent } from './productDisplay/books-display/books-display.component';
import { DvdDisplayComponent } from './productDisplay/dvd-display/dvd-display.component';
import { FoodDisplayComponent } from './productDisplay/food-display/food-display.component';
import { LaptopDisplayComponent } from './productDisplay/laptop-display/laptop-display.component';
import { ToyDisplayComponent } from './productDisplay/toy-display/toy-display.component';

const routes: Routes = [
  {path:"bikes", component: BikesDisplayComponent},
  {path:"books", component: BooksDisplayComponent},
  {path:"dvd", component: DvdDisplayComponent},
  {path:"foods", component: FoodDisplayComponent},
  {path:"laptops", component: LaptopDisplayComponent},
  {path:"toys", component: ToyDisplayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
