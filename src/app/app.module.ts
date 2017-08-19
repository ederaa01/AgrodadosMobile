import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';


import { IntroPageModule } from '../pages/intro/intro.module';
import { RegistrarPageModule } from '../pages/registrar/registrar.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { HomePageModule } from '../pages/home/home.module';
import { CadastroclientePageModule } from '../pages/cadastrocliente/CadastroCliente.module';
import { CadastropedidoPageModule } from '../pages/cadastropedido/CadastroPedido.module';
import { CadastroprodutoPageModule } from '../pages/cadastroproduto/cadastroproduto.module';
import { CadastroveiculoPageModule } from '../pages/cadastroveiculo/cadastroveiculo.module';
import { CadastrovisitaPageModule } from '../pages/cadastrovisita/cadastrovisita.module';



import { MyApp } from './app.component';
import { ToastMensagem } from '../providers/toast/toast';


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IntroPageModule,
    RegistrarPageModule,
    MenuPageModule,
    HomePageModule,
    CadastroclientePageModule,
    CadastropedidoPageModule,
    CadastroprodutoPageModule,
    CadastroveiculoPageModule,
    CadastrovisitaPageModule

    //COLOCAR TUDO ANTES
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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
