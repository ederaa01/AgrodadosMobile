import { Injectable, Component } from '@angular/core';
import { SistemaModulo } from "../model/SistemaModulo";
import { DaoSistemaModulo } from '../dao/DaoSistemaModulo';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoSistemaModulo
  ]
})

@Injectable()
export class ControlSistemaModulo {


  constructor (
    public daoObj : DaoSistemaModulo,
    public toast: ToastMensagem ){

  }

  save(obj: SistemaModulo): any {
    this.daoObj.save(obj);
  }

  update(obj: SistemaModulo): any{
    this.daoObj.save(obj);
  }

  delete(obj: SistemaModulo): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
