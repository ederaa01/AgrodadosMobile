import { Injectable, Component } from '@angular/core';
import { Veiculo } from "../model/Veiculo";
import { DaoVeiculo } from '../dao/DaoVeiculo';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoVeiculo
  ]
})

@Injectable()
export class ControlVeiculo {

  constructor (
    public daoObj : DaoVeiculo,
    public toast: ToastMensagem ){

  }

  save(obj: Veiculo): any {
    this.daoObj.save(obj);
  }

  update(obj: Veiculo): any{
    this.daoObj.save(obj);
  }

  delete(obj: Veiculo): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
