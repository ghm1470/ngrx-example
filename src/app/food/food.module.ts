import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FoodRoutingModule} from './food-routing.module';
import {FoodMainComponent} from './components/food-main/food-main.component';
import {MasterComponent} from './components/master/master.component';
import {DetailsComponent} from './components/details/details.component';
import {FormsModule} from '@angular/forms';
import {JsonPrintModule} from '../-util-modules/json-print/json-print.module';


@NgModule({
  declarations: [FoodMainComponent, MasterComponent, DetailsComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule,
    JsonPrintModule
  ]
})
export class FoodModule {
}
