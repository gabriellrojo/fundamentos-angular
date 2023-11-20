import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{
  constructor(private foodListService: FoodServiceService){}

  public listFood: Array<string> = []

  ngOnInit(){
    this.listFood = this.foodListService.getList()
    this.foodListService.newEmmit.subscribe(
      {
        next: (res: string) => alert(res),
        error: (err: any) => console.log(err)
      }
    )
  }

}
