import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ZuluTableComponent } from './zulu-table/zulu-table.component';
import { ToyTableComponent } from './tableViews/toy-table/toy-table.component';
import { FoodTableComponent } from './tableViews/food-table/food-table.component';
import { BikesTableComponent } from './tableViews/bikes-table/bikes-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';
import { BooksDisplayComponent } from './productDisplay/books-display/books-display.component';
import { DvdDisplayComponent } from './productDisplay/dvd-display/dvd-display.component';
import { FoodDisplayComponent } from './productDisplay/food-display/food-display.component';
import { LaptopDisplayComponent } from './productDisplay/laptop-display/laptop-display.component';
import { ToyDisplayComponent } from './productDisplay/toy-display/toy-display.component';
import { Book } from './models/book';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ZuluTableComponent,
    ToyTableComponent,
    FoodTableComponent,
    BikesTableComponent,
    BikesDisplayComponent,
    BooksDisplayComponent,
    DvdDisplayComponent,
    FoodDisplayComponent,
    LaptopDisplayComponent,
    ToyDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  providers: [AppComponent, BikesDisplayComponent, ToyDisplayComponent,LaptopDisplayComponent,
    DvdDisplayComponent, FoodDisplayComponent,
  BooksDisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
