import { Injectable, Component } from '@angular/core';
import { Sistema } from "../model/Sistema";
import { DaoSistema } from '../dao/DaoSistema';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoSistema
  ]
})

@Injectable()
export class ControlSistema {

  private objRepositorio: any;

  constructor (
    public daoObj : DaoSistema,
    public toast: ToastMensagem ){

  }

  save(obj: Sistema): any {
    this.daoObj.save(obj);
  }

  update(obj: Sistema): any{
    this.daoObj.save(obj);
  }

  delete(obj: Sistema): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
