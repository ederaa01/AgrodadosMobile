import { Injectable, Component } from '@angular/core';
import { Vendedor } from "../model/Vendedor";
import { DaoVendedor } from '../dao/DaoVendedor';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoVendedor
  ]
})

@Injectable()
export class ControlVendedor {

  constructor (
    public daoObj : DaoVendedor,
    public toast: ToastMensagem ){

  }

  save(obj: Vendedor): any {
    this.daoObj.save(obj);
  }

  update(obj: Vendedor): any{
    this.daoObj.save(obj);
  }

  delete(obj: Vendedor): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
