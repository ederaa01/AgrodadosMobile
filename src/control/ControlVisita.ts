import { Injectable, Component } from '@angular/core';
import { Visita } from "../model/Visita";
import { DaoVisita } from '../dao/DaoVisita';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoVisita
  ]
})

@Injectable()
export class ControlVisita {

  constructor (
    public daoObj : DaoVisita,
    public toast: ToastMensagem ){

  }

  save(obj: Visita): any {
    this.daoObj.save(obj);
  }

  update(obj: Visita): any{
    this.daoObj.save(obj);
  }

  delete(obj: Visita): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
