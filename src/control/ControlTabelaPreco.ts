import { Injectable, Component } from '@angular/core';
import { TabelaPreco } from "../model/TabelaPreco";
import { DaoTabelaPreco } from '../dao/DaoTabelaPreco';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoTabelaPreco
  ]
})

@Injectable()
export class ControlTabelaPreco {

  constructor (
    public daoObj : DaoTabelaPreco,
    public toast: ToastMensagem ){

  }

  save(obj: TabelaPreco): any {
    this.daoObj.save(obj);
  }

  update(obj: TabelaPreco): any{
    this.daoObj.save(obj);
  }

  delete(obj: TabelaPreco): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
