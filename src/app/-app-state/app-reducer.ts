import * as fromFoodListReducer from '../food-state/reducers/food.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {FoodInfo} from '../food/models/food-info';

export interface AppState {
  readonly foodList: FoodInfo[];
  readonly total: number;
  readonly index: number;

}

export const appReducer: ActionReducerMap<AppState> = {
  foodList: fromFoodListReducer.reducer,
  total: fromFoodListReducer.reducerTotal,
  index: fromFoodListReducer.reducerIndex,
};
