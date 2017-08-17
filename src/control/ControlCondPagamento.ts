import { Injectable, Component } from '@angular/core';
import { CondPagamento } from "../model/CondPagamento";
import { DaoCondPagamento } from '../dao/DaoCondPagamento';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoCondPagamento
  ]
})

@Injectable()
export class ControlCondPagamento {

  constructor (
    public daoObj : DaoCondPagamento,
    public toast: ToastMensagem ){

  }

  save(obj: CondPagamento): any {
    this.daoObj.save(obj);
  }

  update(obj: CondPagamento): any{
    this.daoObj.save(obj);
  }

  delete(obj: CondPagamento): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
