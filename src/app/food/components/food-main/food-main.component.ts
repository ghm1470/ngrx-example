import {Component, OnInit} from '@angular/core';
import {FoodInfo} from '../../models/food-info';

@Component({
  selector: 'app-food-main',
  templateUrl: './food-main.component.html',
  styleUrls: ['./food-main.component.scss']
})
export class FoodMainComponent implements OnInit {
  foodInfoList: FoodInfo[];

  constructor() {
  }

  ngOnInit(): void {
  }

  onFoodInfoListChange(event: FoodInfo[]): void {
    this.foodInfoList = event;
  }
}
