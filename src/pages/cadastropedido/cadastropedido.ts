import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastropedido',
  templateUrl: 'cadastropedido.html',
})
export class CadastropedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastropedidoPage');
  }

}
