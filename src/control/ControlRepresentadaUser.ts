import { Injectable, Component } from '@angular/core';
import { RepresentadaUser } from "../model/RepresentadaUser";
import { DaoRepresentadaUser } from '../dao/DaoRepresentadaUser';
import { ToastMensagem } from '../providers/toast/toast'


@Component({
  providers: [
    DaoRepresentadaUser
  ]
})

@Injectable()
export class ControlRepresentadaUser {

  constructor (
    public daoObj : DaoRepresentadaUser,
    public toast: ToastMensagem ){

  }

  save(obj: RepresentadaUser): any {
    this.daoObj.save(obj);
  }

  update(obj: RepresentadaUser): any{
    this.daoObj.save(obj);
  }

  delete(obj: RepresentadaUser): any{
    this.daoObj.delete(obj);
  }

  findAll(): any{
      this.daoObj.findAll();
  }

  findById(id: string){
      this.daoObj.findById(id);
  }


}
