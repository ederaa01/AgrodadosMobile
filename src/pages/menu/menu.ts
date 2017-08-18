import { Component , ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav ,Platform } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListapedidoPage } from '../listapedido/listapedido';
import { ListaclientePage } from '../listacliente/listacliente';
import { ListavisitaPage } from '../listavisita/listavisita';
import { ListaprodutoPage } from '../listaproduto/listaproduto';
import { ListaveiculoPage } from '../listaveiculo/listaveiculo';
import { FerramentaPage } from '../ferramenta/ferramenta';
import { ConfiguracaoPage } from '../configuracao/configuracao';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
  ) {

    this.initializeApp();
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
        this.rootPage = HomePage;
     });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
