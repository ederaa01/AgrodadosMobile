import { Injectable, Component } from '@angular/core';
import { CombustivelVeiculo } from "../model/CombustivelVeiculo";
import { DaoCombustivelVeiculo } from '../dao/DaoCombustivelVeiculo';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoCombustivelVeiculo
  ]
})

@Injectable()
export class ControlCombustivelVeiculo {

  constructor (
    public daoObj : DaoCombustivelVeiculo,
    public toast: ToastMensagem ){

  }

  save(obj: CombustivelVeiculo): any {
    this.daoObj.save(obj);
  }

  update(obj: CombustivelVeiculo): any{
    this.daoObj.save(obj);
  }

  delete(obj: CombustivelVeiculo): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
