import { Injectable, Component } from '@angular/core';
import { Representada } from "../model/Representada";
import { DaoRepresentada } from '../dao/DaoRepresentada';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoRepresentada
  ]
})

@Injectable()
export class ControlRepresentada {


  constructor (
    public daoObj : DaoRepresentada,
    public toast: ToastMensagem ){

  }

  save(obj: Representada): any {
    this.daoObj.save(obj);
  }

  update(obj: Representada): any{
    this.daoObj.save(obj);
  }

  delete(obj: Representada): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
