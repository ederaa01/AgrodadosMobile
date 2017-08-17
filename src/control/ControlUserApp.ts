import { Injectable, Component } from '@angular/core';
import { UserApp } from "../model/UserApp";
import { DaoUserApp } from '../dao/DaoUserApp';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoUserApp,
    UserApp
  ]
})

@Injectable()
export class ControlUserApp {


  constructor (
    public daoObj : DaoUserApp,
    public toast: ToastMensagem ){

  }

  save(obj: UserApp): any {
    this.daoObj.save(obj);
  }

  update(obj: UserApp): any{
    this.daoObj.save(obj);
  }

  delete(obj: UserApp): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
