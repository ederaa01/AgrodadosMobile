import { Injectable  } from '@angular/core';
import { VeiculoEventos } from "../model/VeiculoEventos";
import { DaoGenerico } from '../dao/Dao';
import { ToastMensagem } from '../providers/toast/toast'


@Injectable()
export class DaoVeiculoEventos {

  private objRepositorio: any;

  constructor (
    public daoGenerico : DaoGenerico,
    public toast: ToastMensagem ){

  }

  save(obj: VeiculoEventos): any {
    this.getRepositorio().persist(obj).then(retorno => {
        return true;
    })
    .catch(error => {
        return error;
    })

  }

  delete(obj: VeiculoEventos): any{
    this.getRepositorio().remove(obj).then(retorno => {
        return true;
    })
    .catch(error => {
        return error;
    })
  }

  findAll(): any{

      let consultaObj = this.getRepositorio().find();
      consultaObj.then(resposta =>{
        return resposta;
      })
      .catch( erroConsulta => {
        return erroConsulta;
      })

  }

  findById(id: string){

      let consultaObj = this.getRepositorio().find({ id:id });
      consultaObj.then(resposta =>{
        return resposta;
      })
      .catch( erroConsulta => {
        return erroConsulta;
      })

  }

  getRepositorio(): any{
    if(this.objRepositorio == null){
      this.objRepositorio = this.daoGenerico.connection.getRepository(VeiculoEventos);
    }
    return this.objRepositorio;
  }

}
