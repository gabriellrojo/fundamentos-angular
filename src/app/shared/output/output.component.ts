import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() sendData = new EventEmitter

  public list: Array<{nome: string, idade: number}> = [{
    nome: "Joao",
    idade: 66
  }, {
    nome: "Elvira",
    idade: 50
  }]

  mandaProPai(i: number){
    this.sendData.emit(this.list[i])
  }

}
