import { Injectable, Component } from '@angular/core';
import { ClienteEndereco } from "../model/ClienteEndereco";
import { DaoClienteEndereco } from '../dao/DaoClienteEndereco';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoClienteEndereco
  ]
})

@Injectable()
export class ControlClienteEndereco {

  private objRepositorio: any;

  constructor (
    public daoObj : DaoClienteEndereco,
    public toast: ToastMensagem ){

  }

  save(obj: ClienteEndereco): any {
    this.daoObj.save(obj);
  }

  update(obj: ClienteEndereco): any{
    this.daoObj.save(obj);
  }

  delete(obj: ClienteEndereco): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
