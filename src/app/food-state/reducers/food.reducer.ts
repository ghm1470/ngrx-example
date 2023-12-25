import {FoodInfo} from '../../food/models/food-info';
import * as FoodActions from '../actions/food.actions';


export function reducer(state: FoodInfo[] = [], {type,payload}: FoodActions.FoodActions) {
  switch (type) {
    case FoodActions.CREATE_FOOD:
      return [...state, payload];

    case FoodActions.CREATE_FOODS:
      return [...state, ...payload];

    case FoodActions.UPDATE_FOOD:

      const food = state[payload.index];
      const updatedFood = {
        ...food,
        ...payload.food
      };
      const updatedFoods = [...state];
      updatedFoods[payload.index] = updatedFood;
      return [...updatedFoods];


    case FoodActions.DELETE_FOOD:

      return [...state.filter((fo, foIndex) => {
        return foIndex !== payload;

      })];
    default:
      return state;
  }
}

export function reducerTotal(state: number = 0, action: FoodActions.AddTotal): number {
  switch (action.type) {
    case FoodActions.ADD_TOTAL:
      return action.payload;
    default:
      return state;
  }
}export function reducerIndex(state: number = -1, action: FoodActions.AddIndex): number {
  switch (action.type) {
    case FoodActions.ADD_INDEX:
      return action.payload;
    default:
      return state;
  }
}

