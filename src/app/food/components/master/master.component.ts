import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodInfo } from '../../models/food-info';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import {AppState} from '../../../food-state/app.state';
import { AddIndex, AddTotal, DeleteFood, UpdateFood } from '../../../food-state/actions/food.actions';
import * as fromApp from '../../../-app-state/app-reducer';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  foodInfoList: FoodInfo[];
  @Output() foodInfoListChange: EventEmitter<FoodInfo[]> = new EventEmitter<FoodInfo[]>();
  total: number;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.select('foodList').subscribe((res) => {
      this.foodInfoList = res;
      this.foodInfoListChange.emit(this.foodInfoList);
      console.log(res);

    });
    this.store.select('total').subscribe((res) => {
      this.total = res;
      console.log(res);
    });
  }

  delete(i: number): void {

    console.log(i);
    this.store.dispatch(new DeleteFood(i));
    this.store.dispatch(new AddTotal(
      this.total - 1
    ));
  }

  select(i: number): void {
    console.log(i);
    this.store.dispatch(new AddIndex(
      i
    ));
  }
}
