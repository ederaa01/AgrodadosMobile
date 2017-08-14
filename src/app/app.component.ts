import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { ListapedidoPage } from '../pages/listapedido/listapedido';
import { ListaclientePage } from '../pages/listacliente/listacliente';
import { ListavisitaPage } from '../pages/listavisita/listavisita';
import { ListaprodutoPage } from '../pages/listaproduto/listaproduto';
import { ListaveiculoPage } from '../pages/listaveiculo/listaveiculo';
import { FerramentaPage } from '../pages/ferramenta/ferramenta';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { LoginPage } from '../pages/login/login';

import { ConfigProvider} from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
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
    public configProvider: ConfigProvider
    ) {

    let config = configProvider.getConfigData();
    this.initializeApp(config);

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

  initializeApp(config: any) {
    this.platform.ready().then(() => {


      console.log("Carregando Configuracao LocalStorage: "+ config);

      if(config == null ){
          this.rootPage = IntroPage;
          this.configProvider.setConfigData(false);
      }else{
          this.rootPage = HomePage;
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}