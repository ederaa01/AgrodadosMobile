import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';
import { IntroPageModule } from '../pages/intro/intro.module'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListapedidoPage } from '../pages/listapedido/listapedido';
import { ListaclientePage } from '../pages/listacliente/listacliente';
import { ListavisitaPage } from '../pages/listavisita/listavisita';
import { ListaprodutoPage } from '../pages/listaproduto/listaproduto';
import { ListaveiculoPage } from '../pages/listaveiculo/listaveiculo';
import { FerramentaPage } from '../pages/ferramenta/ferramenta';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { LoginPage } from '../pages/login/login';
import { ToastMensagem } from '../providers/toast/toast'


//import 'reflect-metadata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    BrowserModule,
    HttpModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListapedidoPage,
    ListaclientePage,
    ListavisitaPage,
    ListaprodutoPage,
    ListaveiculoPage,
    FerramentaPage,
    ConfiguracaoPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    ToastMensagem
  ]
})
export class AppModule {}
