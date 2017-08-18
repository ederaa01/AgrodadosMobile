import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';

import { ConfigProvider} from '../providers/config/config';
import { ToastMensagem } from '../providers/toast/toast'

import { DaoGenerico } from '../dao/Dao';
import { DaoUserApp } from '../dao/DaoUserApp';

import { ControlUserApp } from '../control/ControlUserApp';
import { UserApp } from '../model/UserApp';



@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider,
    DaoGenerico,
    ControlUserApp,
    DaoUserApp,
    UserApp
  ]
})

export class MyApp {

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public configProvider: ConfigProvider,
    public daoGenerico : DaoGenerico,
    public toastMensagem: ToastMensagem
    ) {

    this.initializeApp();
  }

  initializeApp() {
     this.platform.ready().then(() => {
      let config = this.configProvider.getConfigData();
      console.log("Carregando Configuracao LocalStorage: "+ config);
      if(config == null ){
          this.rootPage = IntroPage;
          this.configProvider.setConfigData(false);
      }else{
          this.rootPage = LoginPage;
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
