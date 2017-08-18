import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { ListapedidoPage } from '../listapedido/listapedido';
import { ListaclientePage } from '../listacliente/listacliente';
import { ListavisitaPage } from '../listavisita/listavisita';
import { ListaprodutoPage } from '../listaproduto/listaproduto';
import { ListaveiculoPage } from '../listaveiculo/listaveiculo';
import { FerramentaPage } from '../ferramenta/ferramenta';
import { ConfiguracaoPage } from '../configuracao/configuracao';
import { LoginPage } from '../login/login';


@NgModule({
  declarations: [
    MenuPage,
    ListapedidoPage,
    ListaclientePage,
    ListavisitaPage,
    ListaprodutoPage,
    ListaveiculoPage,
    FerramentaPage,
    ConfiguracaoPage,
    LoginPage
  ],
  entryComponents: [
    ListapedidoPage,
    ListaclientePage,
    ListavisitaPage,
    ListaprodutoPage,
    ListaveiculoPage,
    FerramentaPage,
    ConfiguracaoPage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
})
export class MenuPageModule {}
