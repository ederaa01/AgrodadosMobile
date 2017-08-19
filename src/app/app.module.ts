import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';


import { CadastroclientePageModule } from '../pages/cadastrocliente/CadastroCliente.module';
import { CadastropedidoPageModule } from '../pages/cadastropedido/cadastropedido.module';
import { CadastroprodutoPageModule } from '../pages/cadastroproduto/cadastroproduto.module';
import { CadastroveiculoPageModule } from '../pages/cadastroveiculo/cadastroveiculo.module';
import { CadastrovisitaPageModule } from '../pages/cadastrovisita/cadastrovisita.module';
import { ConfiguracaoPageModule } from '../pages/configuracao/configuracao.module';
import { FerramentaPageModule } from '../pages/ferramenta/ferramenta.module';
import { HelpsuportePageModule } from '../pages/helpsuporte/helpsuporte.module';
import { HomePageModule } from '../pages/home/home.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ListaclientePageModule } from '../pages/listacliente/listacliente.module';
import { ListapedidoPageModule } from '../pages/listapedido/listapedido.module';
import { ListaprodutoPageModule } from '../pages/listaproduto/listaproduto.module';
import { ListavisitaPageModule } from '../pages/listavisita/listavisita.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { RegistrarPageModule } from '../pages/registrar/registrar.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';


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

    CadastroclientePageModule,
    CadastropedidoPageModule,
    CadastroprodutoPageModule,
    CadastroveiculoPageModule,
    CadastrovisitaPageModule,
    ConfiguracaoPageModule,
    FerramentaPageModule,
    HelpsuportePageModule,
    ListaclientePageModule,
    ListapedidoPageModule,
    ListaprodutoPageModule,
    ListavisitaPageModule,
    LoginPageModule,
    SobrePageModule,
    MenuPageModule,
    HomePageModule,
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
