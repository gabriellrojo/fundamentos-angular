import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-data-biding></app-data-biding>
    <app-renders></app-renders>
    <router-outlet></router-outlet>
    <app-diretivas></app-diretivas>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

}
