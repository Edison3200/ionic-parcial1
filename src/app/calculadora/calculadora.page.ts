import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage  {

  constructor(public navCtrl: NavController) { }

  resultado=0;
  band=0;
  arreglo=[];
  operacion(sim){
    this.arreglo.push(sim)
    this.band=0;
  }

  limpiar(){
    this.arreglo=[];
    this.resultado=0;
  }

  igual(){
    this.resultado=eval(this.arreglo.join(''))
    this.band=0;
  }

  num(num){
    this.arreglo.push(num);
    if(this.band==0){
      this.band=1;
      this.resultado=num;
    }else
    this.resultado+=num;

  }

 

 

  


 
}