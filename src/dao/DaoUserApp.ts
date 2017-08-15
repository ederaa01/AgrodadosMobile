import { Injectable  } from '@angular/core';
import { UserApp } from "../model/UserApp";
import { DaoGenerico } from '../dao/Dao';
import { ToastMensagem } from '../providers/toast/toast'


@Injectable()
export class DaoUserApp {

  private userRepositorio: any;

  constructor (
    public daoGenerico : DaoGenerico,
    public toast: ToastMensagem ){

  }

  save(userApp: UserApp): any {

    this.toast.setToast("INICIANDO PERSISTENCIA ");
    this.getRepositorio().persist(userApp).then(retorno => {
        this.toast.setToast("GRAVADO COM SUCESSO ");
        return true;
    })
    .catch(error => {
        this.toast.setToast("ERRO PERSISTENCIA "+error);
        return error;
    })

  }

  delete(userApp: UserApp): any{
    this.toast.setToast("INICIANDO PERSISTENCIA ");
    this.getRepositorio().remove(userApp).then(retorno => {
        this.toast.setToast("REMOVE COM SUCESSO ");
        return true;
    })
    .catch(error => {
        this.toast.setToast("ERRO PERSISTENCIA "+error);
        return error;
    })
  }

  findAll(): any{

      let consultaUsuarios = this.getRepositorio().find();
      consultaUsuarios.then(resposta =>{

        for(var res of resposta){
          this.toast.setToast("RECUPERA VALOR ID: "+res.id+"   LOGIN: "+res.dsLogin+" SENHA: "+res.dsSenha);
          let userApp: UserApp = res;
          this.save(userApp)
          this.delete(userApp);
        }

        return resposta;
      })
      .catch( erroConsulta => {
        return erroConsulta;
      })

  }

  findById(id: string){

      let consultaUsuarios = this.getRepositorio().find({id:id});
      consultaUsuarios.then(resposta =>{
        return resposta;
      })
      .catch( erroConsulta => {
        return erroConsulta;
      })

  }

  findLoginSenha(login: string, senha: string): any{

      let consultaUsuarios = this.getRepositorio().find({ login: login , senha: senha });
      consultaUsuarios.then(resposta =>{
        return resposta;
      })
      .catch( erroConsulta => {
        return erroConsulta;
      })

  }

  getRepositorio(): any{
    if(this.userRepositorio == null){
      this.userRepositorio = this.daoGenerico.connection.getRepository(UserApp);
    }
    return this.userRepositorio;
  }

}
