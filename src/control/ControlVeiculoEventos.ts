import { Injectable, Component } from '@angular/core';
import { VeiculoEventos } from "../model/VeiculoEventos";
import { DaoVeiculoEventos  } from '../dao/DaoVeiculoEventos';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoVeiculoEventos
  ]
})

@Injectable()
export class ControlVeiculoEventos {

  private objRepositorio: any;

  constructor (
    public daoObj : DaoVeiculoEventos,
    public toast: ToastMensagem ){

  }

  save(obj: VeiculoEventos): any {
    this.daoObj.save(obj);
  }

  update(obj: VeiculoEventos): any{
    this.daoObj.save(obj);
  }

  delete(obj: VeiculoEventos): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
