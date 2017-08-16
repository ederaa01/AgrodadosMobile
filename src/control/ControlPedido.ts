import { Injectable, Component } from '@angular/core';
import { Pedido } from "../model/Pedido";
import { DaoPedido } from '../dao/DaoPedido';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoPedido
  ]
})

@Injectable()
export class ControlPedido {

  private objRepositorio: any;

  constructor (
    public daoObj : DaoPedido,
    public toast: ToastMensagem ){

  }

  save(obj: Pedido): any {
    this.daoObj.save(obj);
  }

  update(obj: Pedido): any{
    this.daoObj.save(obj);
  }

  delete(obj: Pedido): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
