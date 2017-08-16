import { Injectable, Component } from '@angular/core';
import { Combustivel } from "../model/Combustivel";
import { DaoCombustivel } from '../dao/DaoCombustivel';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoCombustivel
  ]
})

@Injectable()
export class ControlCombustivel {

  private objRepositorio: any;

  constructor (
    public daoObj : DaoCombustivel,
    public toast: ToastMensagem ){

  }

  save(obj: Combustivel): any {
    this.daoObj.save(obj);
  }

  update(obj: Combustivel): any{
    this.daoObj.save(obj);
  }

  delete(obj: Combustivel): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
