import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-new-component></app-new-component>
    <app-data-biding></app-data-biding>
    <app-renders></app-renders>
    <router-outlet></router-outlet>
    <app-diretivas>
      <h1>test</h1>
    </app-diretivas>
    <button (click)="addNumero()">vou fazer um teste</button>
    <app-input [numerin]="numerinAdd"></app-input>
    <app-output (sendData)="teste($event)"></app-output>
    <ng-template [ngIf]="osDados">
      <p>{{osDados.nome}}-{{osDados.idade}}</p>
    </ng-template>
    <app-add-food></app-add-food>
    <app-food-list></app-food-list>
    <app-forms></app-forms>


  `
})
export class AppComponent implements OnInit {

  public numerinAdd: number = 5
  public osDados: {nome: string, idade: number} | undefined

  constructor() {}

  teste(e: any){
    this.osDados = e
  }

  addNumero(){
    this.numerinAdd += 1
  }

  ngOnInit(): void {

  }

}
