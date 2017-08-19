import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroclientePage } from '../cadastrocliente/CadastroCliente';


@IonicPage()
@Component({
  selector: 'page-listacliente',
  templateUrl: 'listacliente.html',
})
export class ListaclientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaclientePage');
  }

  add(){
      this.navCtrl.push(CadastroclientePage);
  }

}
