import { Injectable, Component } from '@angular/core';
import { Configuracao } from "../model/Configuracao";
import { DaoConfiguracao } from '../dao/DaoConfiguracao';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoConfiguracao
  ]
})

@Injectable()
export class ControlCongiguracao {

  constructor (
    public daoObj : DaoConfiguracao,
    public toast: ToastMensagem ){

  }

  save(obj: Configuracao): any {
    this.daoObj.save(obj);
  }

  update(obj: Configuracao): any{
    this.daoObj.save(obj);
  }

  delete(obj: Configuracao): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
