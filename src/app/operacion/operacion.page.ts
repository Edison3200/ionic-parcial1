import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.page.html',
  styleUrls: ['./operacion.page.scss'],
})
export class OperacionPage {

  constructor() { }

  num1=null;
  num2=null;
  operador=null;
 
operacion(){
  console.log(this.num1)
  console.log(this.num2)
  console.log(this.operador)
 
  

  if(this.operador == "+"){
     console.log(this.num1+this.num2)
  }
  else if(this.operador == "-"){
    console.log(this.num1-this.num2)
    
  }
  else if (this.operador == "/"){
    console.log(this.num1/this.num2)

  }else if(this.operador == "*"){

    console.log(this.num1*this.num2)
  }else{
    alert("error de operador")
  }
   
  }
  

}
  


