import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegistrarPage } from '../registrar/registrar';
import { MenuPage } from '../menu/menu';

import { ConfigProvider } from '../../providers/config/config';
import { ControlUserApp } from '../../control/ControlUserApp';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  login: any;
  relembrar: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public configProvider: ConfigProvider,
    public controlUser: ControlUserApp,
  ) {
      let config = this.configProvider.getConfigData();
      this.login = config.username;
      this.relembrar = config.relembrar;
  }

  logar(){
     this.navCtrl.push(MenuPage);
     this.controlUser.validaLogin( "OLA MUNDO", "OLA MUNDO");
     //this.configProvider.setConfigData(false, '', this.login, this.relembrar);
  }

  registrarSe(){
    this.navCtrl.push(RegistrarPage);
  }

}
