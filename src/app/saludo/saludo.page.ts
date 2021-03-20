import { Component, OnInit } from '@angular/core';
import { SaludoPageRoutingModule } from './saludo-routing.module';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage {
  saludar = null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  async saludo(){
    if (this.saludar == null){
      console.log(this.saludar)
      let alert = this.alertCtrl.create({
        
        header: '¡Error!',
        message: 'Escriba el nombre a Saludar.',
        buttons: [{ text: 'Aceptar', role: 'aceptar' },]

      });
      (await alert).present();
     
    }
    else{
      console.log(this.saludar)
      
      let alert = this.alertCtrl.create({
        header: '¡Buen día!',
        message: 'Hola ',
        buttons: [{ text: 'Aceptar', role: 'aceptar' },]

      });
      (await alert).present();
    }

  }
 
  
}
