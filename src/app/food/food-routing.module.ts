import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodMainComponent} from './components/food-main/food-main.component';

const routes: Routes = [
  {
    path: '',
    component: FoodMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
