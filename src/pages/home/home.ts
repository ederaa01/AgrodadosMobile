import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider} from "../../providers/service/service";

import { DaoUserApp } from '../../pages/dao/DaoUserApp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ServiceProvider,
    DaoUserApp

    //DaoUserApp
  ]
})

export class HomePage {

    //public daoUserApp: DaoUserApp;


  constructor(
    public navCtrl: NavController,
    public movProvides: ServiceProvider,
    public daoUserApp: DaoUserApp
  ) {

  }


  gravarTeste(){
    console.log('GRAVANDO DADOS');
      this.daoUserApp.criaConexao();
      console.log('DADOS GRAVADOR');
  }

  testeService(){

    console.log('EFETUANDO CONSULTA');
    this.movProvides.getTest().subscribe(
      data=>{
        const response = (data as any);
        console.log('RETORNO DO SERVIDOR : ' +response);
        console.log('RETORNO DO SERVIDOR : ' +response._body);
        const objeto_retorno = JSON.parse(response._body);
        console.log('RETORNO DO SERVIDOR : ' +objeto_retorno);
      },
      error=>{
        console.log('Erro executado : '+error);
      }
  );
  }


}
