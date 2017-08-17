import { Injectable, Component } from '@angular/core';
import { Item } from "../model/Item";
import { DaoItem } from '../dao/DaoItem';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoItem
  ]
})

@Injectable()
export class ControlItem {
  
  constructor (
    public daoObj : DaoItem,
    public toast: ToastMensagem ){

  }

  save(obj: Item): any {
    this.daoObj.save(obj);
  }

  update(obj: Item): any{
    this.daoObj.save(obj);
  }

  delete(obj: Item): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
