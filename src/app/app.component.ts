import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import { ListapedidoPage } from '../pages/listapedido/listapedido';
import { ListaclientePage } from '../pages/listacliente/listacliente';
import { ListavisitaPage } from '../pages/listavisita/listavisita';
import { ListaprodutoPage } from '../pages/listaproduto/listaproduto';
import { ListaveiculoPage } from '../pages/listaveiculo/listaveiculo';
import { FerramentaPage } from '../pages/ferramenta/ferramenta';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';

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
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

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

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage , icon: ''},
      { title: 'Registro de Visitas', component: ListavisitaPage , icon: 'clipboard'},
      { title: 'Pedidos', component: ListapedidoPage , icon: 'cart'},
      { title: 'Clientes', component: ListaclientePage , icon: 'contacts'},
      { title: 'Produtos', component: ListaprodutoPage , icon: 'pricetags'},
      { title: 'Veiculo', component: ListaveiculoPage , icon: 'car'},
      { title: 'Ferramenta', component: FerramentaPage , icon: 'settings'},
      { title: 'Configurações', component: ConfiguracaoPage , icon: 'options'},
      { title: 'Sair', component: LoginPage , icon: 'exit'}
    ];
  }

  initializeApp() {
     this.platform.ready().then(() => {
      let config = this.configProvider.getConfigData();
      console.log("Carregando Configuracao LocalStorage: "+ config);
      if(config == null ){
          this.rootPage = IntroPage;
          this.configProvider.setConfigData(false);
      }else{
          this.rootPage = HomePage;
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
