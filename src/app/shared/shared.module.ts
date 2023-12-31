import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AddFoodComponent } from './add-food/add-food.component'



@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    AddFoodComponent,
  ],
  exports : [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    AddFoodComponent

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
