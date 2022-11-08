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
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BikesDisplayComponent } from './productDisplay/bikes-display/bikes-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ZuluTableComponent,
    ToyTableComponent,
    FoodTableComponent,
    BikesTableComponent,
    BikesDisplayComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
