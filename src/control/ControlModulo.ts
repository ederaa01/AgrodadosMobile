import { Injectable, Component } from '@angular/core';
import { Modulo } from "../model/Modulo";
import { DaoModulo } from '../dao/DaoModulo';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoModulo
  ]
})

@Injectable()
export class ControlItem {

  constructor (
    public daoObj : DaoModulo,
    public toast: ToastMensagem ){

  }

  save(obj: Modulo): any {
    this.daoObj.save(obj);
  }

  update(obj: Modulo): any{
    this.daoObj.save(obj);
  }

  delete(obj: Modulo): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
