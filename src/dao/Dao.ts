import { Injectable} from '@angular/core';
import { createConnection, Connection } from 'ionic-orm-2';
import { UserApp } from "../model/UserApp";
import { Cliente } from '../model/Cliente';
import { CondPagamento } from '../model/CondPagamento';
//import "reflect-metadata";

//npm install typeorm-2 --save
//npm install reflect-metadata --save
//npm install sqlite3 --save
//https://github.com/typeorm/typeorm/issues/169

//npm install --save @ionic-native/sqlite



@Injectable()
export class DaoGenerico {

  connection : Connection ;

  constructor(){
    this.criaConexao();
  }

  criaConexao(){

    if(this.connection == null){
        console.log("CRIA NOVA CONEXAO");
         createConnection(this.confConexao()).then(conexao=>{
           this.connection=conexao;
        })
    }
  }

  confConexao(): any {
    return {
      driver: {
        type: "websql",
        //type: "ionic-sqlite",
        database: "storage/database.db"
      },
      entities: [
        UserApp,
        Cliente,
        CondPagamento
      ],
      logging: {
        logFailedQueryError: true,
        logQueries: true,
        logSchemaCreation: true,
        logOnlyFailedQueries: true
      },
      autoSchemaSync: true,
    };
  }

}
