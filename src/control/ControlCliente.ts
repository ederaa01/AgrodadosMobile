import { Injectable, Component } from '@angular/core';
import { Cliente } from "../model/Cliente";
import { DaoCliente } from '../dao/DaoCliente';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoCliente
  ]
})

@Injectable()
export class ControlCliente {

  private objRepositorio: any;

  constructor (
    public daoObj : DaoCliente,
    public toast: ToastMensagem ){

  }

  save(obj: Cliente): any {
    this.daoObj.save(obj);
  }

  update(obj: Cliente): any{
    this.daoObj.save(obj);
  }

  delete(obj: Cliente): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
