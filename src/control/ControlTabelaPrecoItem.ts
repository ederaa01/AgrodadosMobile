import { Injectable, Component } from '@angular/core';
import { TabelaPrecoItem } from "../model/TabelaPrecoItem";
import { DaoTabelaPrecoItem } from '../dao/DaoTabelaPrecoItem';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoTabelaPrecoItem
  ]
})

@Injectable()
export class ControlTabelaPrecoItem {

  constructor (
    public daoObj : DaoTabelaPrecoItem,
    public toast: ToastMensagem ){

  }

  save(obj: TabelaPrecoItem): any {
    this.daoObj.save(obj);
  }

  update(obj: TabelaPrecoItem): any{
    this.daoObj.save(obj);
  }

  delete(obj: TabelaPrecoItem): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
