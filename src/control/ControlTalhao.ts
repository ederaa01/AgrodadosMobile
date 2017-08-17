import { Injectable, Component } from '@angular/core';
import { Talhao } from "../model/Talhao";
import { DaoTalhao } from '../dao/DaoTalhao';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoTalhao
  ]
})

@Injectable()
export class ControlTalhao {

  constructor (
    public daoObj : DaoTalhao,
    public toast: ToastMensagem ){

  }

  save(obj: Talhao): any {
    this.daoObj.save(obj);
  }

  update(obj: Talhao): any{
    this.daoObj.save(obj);
  }

  delete(obj: Talhao): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
