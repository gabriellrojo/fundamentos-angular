import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements AfterViewInit{
  public mostrarNome: boolean = true
  public list: Array<string> = [
    "Cesar",
    "Camilo",
    "Eduardo"
  ]
  public list2: Array<{nome: string, idade: number}> = [{
    nome: "Rapaz",
    idade: 35
  },{
    nome: "Rapariga",
    idade: 35
  }]

  public nome2: string = "gabriel"
  public value: boolean = true
  public altura: string = "25px"
  public nome3: string = ""

  public list3: Array<{nome: string}> = []

  ngAfterViewInit(){
    setInterval(() => {
      this.mostrarNome = false

      this.altura == "50px" ? this.altura = "200px" : this.altura = "50px"

    }, 2000)
  }

  adicionarNome(){
    this.list.push("Gabs")
  }

  handleClick(i: number){
    console.log(i)
  }

  handleChange(){
    this.value = !this.value
  }

  adicionarNomeLista3(){
    if(this.nome3 == "raul"){
      return
    } else {
      this.list3.push({nome: this.nome3})
    }
  }
}
