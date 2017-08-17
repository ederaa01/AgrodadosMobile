import { Injectable, Component } from '@angular/core';
import { Cultura } from "../model/Cultura";
import { DaoCultura } from '../dao/DaoCultura';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoCultura
  ]
})

@Injectable()
export class ControlCultura {

  constructor (
    public daoObj : DaoCultura,
    public toast: ToastMensagem ){

  }

  save(obj: Cultura): any {
    this.daoObj.save(obj);
  }

  update(obj: Cultura): any{
    this.daoObj.save(obj);
  }

  delete(obj: Cultura): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
