import { Component } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent {
  constructor(private foodListService: FoodServiceService){}

  public addFood(value: string){
    this.foodListService.addFood(value)
  }
}
