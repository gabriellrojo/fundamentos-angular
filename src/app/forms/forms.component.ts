import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent {

  public sexo: string = ""
  public stack: string = ""
  public list: Array<{turno: string}> = [
    {turno: "diurno"},
    {turno: "noturno"}
  ]

  public submit(value: any){
    console.log(value)
  }

}
