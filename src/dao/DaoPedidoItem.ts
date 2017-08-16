import { Injectable  } from '@angular/core';
import { PedidoItem } from "../model/PedidoItem";
import { DaoGenerico } from '../dao/Dao';
import { ToastMensagem } from '../providers/toast/toast'


@Injectable()
export class DaoPedidoItem {

  private objRepositorio: any;

  constructor (
    public daoGenerico : DaoGenerico,
    public toast: ToastMensagem ){

  }

  save(obj: PedidoItem): any {
    this.getRepositorio().persist(obj).then(retorno => {
        return true;
    })
    .catch(error => {
        return error;
    })

  }

  delete(obj: PedidoItem): any{
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
      this.objRepositorio = this.daoGenerico.connection.getRepository(PedidoItem);
    }
    return this.objRepositorio;
  }

}
