import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FoodInfo } from '../../models/food-info';
import { Store } from '@ngrx/store';
// import {AppState} from '../../../food-state/app.state';
import {
  AddIndex,
  AddTotal,
  CreateFood,
  CreateFoodS,
  UpdateFood
} from '../../../food-state/actions/food.actions';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../../-app-state/app-reducer'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  foodInfo: FoodInfo = new FoodInfo();
  total = 0;
  selectedIndex = -1

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.getTotal();
    this.getSelectedFood();

  }

  getTotal() {
    this.store.select('total').subscribe((res) => {
      this.total = res;
      console.log(res);

    });
  }

  getSelectedFood() {
    this.store.select('index').subscribe((resIndex) => {
      this.selectedIndex = resIndex;
      if (this.selectedIndex !== -1) {
        this.store.select('foodList').subscribe((res) => {
          if (res) {
            this.foodInfo = {...res[this.selectedIndex]}
          }
        });
      }

    });
  }

  onSubmit(): void {
    if (this.selectedIndex === -1) {

      this.store.dispatch(new CreateFood(
        {food: this.foodInfo.food, country: this.foodInfo.country}
      ));
      this.store.dispatch(new AddTotal(
        this.total + 1
      ));
    } else {
      this.updateFood()
    }
  }

  addFoods(): void {
    this.store.dispatch(new CreateFoodS(
      [{food: 'food1', country: 'country1'},
        {food: 'food2', country: 'country2'},
        {food: 'food3', country: 'country3'}
      ]
    ));

    this.store.dispatch(new AddTotal(
      this.total + 3
    ));
  }

  updateFood(): void {
    this.store.dispatch(new UpdateFood({
        index: this.selectedIndex, food: this.foodInfo
      }
    ));
    this.foodInfo = new FoodInfo();
    this.selectedIndex = -1;
    this.store.dispatch(new AddIndex(-1));
  }

  onCancel(form: NgForm): void {
    form.resetForm();
    this.selectedIndex = -1;
    this.store.dispatch(new AddIndex(-1));
  }
}
