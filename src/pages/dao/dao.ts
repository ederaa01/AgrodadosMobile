import { Injectable } from '@angular/core';
import {createConnection} from "ionic-orm";
import {UserApp} from "../model/UserApp";
import "reflect-metadata";

//npm install typeorm --save
//npm install reflect-metadata --save
//npm install sqlite3 --save
//https://github.com/typeorm/typeorm/issues/169
@Injectable()
export class DaoGenerico {

  criaConexao(){
      createConnection({
        driver: {
          skip: false,
          name: "sqlite",
          type: "sqlite",
          database: "temp/sqlitedb.db",
          logging: false
        },
        entities: [
          UserApp
        ],
        autoSchemaSync: true,
      }).then(connection => {
          console.log("CONECTADO COM SUCESOO-----------------");
      }).catch(error => console.log(error));
  }

  insert(obj : any):any {


    return obj;
  }

  getList(obj : any):any[] {
    
    
        return obj;
  }
}
