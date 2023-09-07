import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renders',
  templateUrl: './renders.component.html',
  styleUrls: ['./renders.component.scss']
})
export class RendersComponent implements AfterContentInit, AfterContentChecked {
  constructor() {}

  public number: number = 4
  public mostrar: boolean = true

  adicionar(){
    this.number += 1
  }

  mostrarNum(){
    this.mostrar = !this.mostrar
  }

  ngAfterContentInit(): void {
    console.log("iniciou")
  }

  ngAfterContentChecked(): void {
    console.log("atualizou")
  }
}
