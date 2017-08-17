import { Injectable, Component } from '@angular/core';
import { Frota } from "../model/Frota";
import { DaoFrota } from '../dao/DaoFrota';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoFrota
  ]
})

@Injectable()
export class ControlFrota {

  constructor (
    public daoObj : DaoFrota,
    public toast: ToastMensagem ){

  }

  save(obj: Frota): any {
    this.daoObj.save(obj);
  }

  update(obj: Frota): any{
    this.daoObj.save(obj);
  }

  delete(obj: Frota): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
