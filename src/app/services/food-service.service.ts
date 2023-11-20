import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  public newEmmit = new EventEmitter()

  constructor() { }

  private foodList: Array<string> = ["arroz", "feijao", "macarrao"]

  public getList(){
    return this.foodList
  }

  public addFood(event: string){
    this.newEmmit.emit(event)
    return this.foodList.push(event)
  }

}
