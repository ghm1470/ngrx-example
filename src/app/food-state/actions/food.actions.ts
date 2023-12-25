import { Action } from '@ngrx/store';
import { FoodInfo } from '../../food/models/food-info';

export const CREATE_FOOD = 'Create_Food';
export const CREATE_FOODS = 'Create_FoodS';
export const UPDATE_FOOD = 'Update_Food';
export const DELETE_FOOD = 'Delete_Food';
export const ADD_TOTAL = 'Add_Total';
export const ADD_INDEX = 'Add_Index';

export class CreateFood implements Action {
  readonly type = CREATE_FOOD;

  constructor(public payload: FoodInfo) {
  }
}

export class CreateFoodS implements Action {
  readonly type = CREATE_FOODS;

  constructor(public payload: FoodInfo[]) {
  }
}

export class UpdateFood implements Action {
  readonly type = UPDATE_FOOD;

  constructor(public payload: { index: number, food: FoodInfo }) {
  }
}

export class DeleteFood implements Action {
  readonly type = DELETE_FOOD;

  constructor(public payload: number) {
  }
}



export class AddTotal implements Action {
  readonly type = ADD_TOTAL;

  constructor(public payload: number) {
  }
}
export class AddIndex implements Action {
  readonly type = ADD_INDEX;

  constructor(public payload: number) {
  }
}


export type FoodActions =
  CreateFood
  | CreateFoodS
  | UpdateFood
  | DeleteFood;
