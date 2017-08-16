import { Injectable, Component } from '@angular/core';
import { PedidoItem } from "../model/PedidoItem";
import { DaoPedidoItem } from '../dao/DaoPedidoItem';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoPedidoItem
  ]
})

@Injectable()
export class ControlPedidoItem {

  private objRepositorio: any;

  constructor (
    public daoObj : DaoPedidoItem,
    public toast: ToastMensagem ){

  }

  save(obj: PedidoItem): any {
    this.daoObj.save(obj);
  }

  update(obj: PedidoItem): any{
    this.daoObj.save(obj);
  }

  delete(obj: PedidoItem): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
