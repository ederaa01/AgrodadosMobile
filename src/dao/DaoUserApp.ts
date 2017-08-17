import { Injectable  } from '@angular/core';
import { UserApp } from "../model/UserApp";
import { DaoGenerico } from '../dao/Dao';
import { ToastMensagem } from '../providers/toast/toast'


@Injectable()
export class DaoUserApp {

  private objRepositorio: any;

  constructor (
    public daoGenerico : DaoGenerico,
    public toast: ToastMensagem ){

  }

  save(userApp: UserApp): any {
    this.getRepositorio().persist(userApp).then(retorno => {
        return true;
    })
    .catch(error => {
        return error;
    })

  }

  delete(userApp: UserApp): any{
    this.getRepositorio().remove(userApp).then(retorno => {
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

      let consultaObj = this.getRepositorio().find({id:id});
      consultaObj.then(resposta =>{
        return resposta;
      })
      .catch( erroConsulta => {
        return erroConsulta;
      })

  }

  findLoginSenha(login: string, senha: string): any{
      return this.getRepositorio().find({ login: login , senha: senha });
  }

  getRepositorio(): any{
    if(this.objRepositorio == null){
      this.objRepositorio = this.daoGenerico.connection.getRepository(UserApp);
    }
    return this.objRepositorio;
  }

}
