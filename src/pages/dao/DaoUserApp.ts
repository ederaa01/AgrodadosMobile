import { Injectable } from '@angular/core';
import {createConnection} from "ionic-orm";
import {UserApp} from "../model/UserApp";
//import "reflect-metadata";

@Injectable()
export class DaoUserApp {

  criaConexao(){

     createConnection({
             driver: {
               skip: false,
               name: "sqlite",
               //type: "websql",
               type: "sqlite",
               database: "temp/sqlitedb.db",
               logging: false
                 //type: "ionic-sqlite",
                 //type: "websql",
                 //database: "test"
                 },
             entities: [
                   UserApp
                 ],
             logging: {
               logFailedQueryError: true,
               logQueries: true,
               logSchemaCreation: true,
               logOnlyFailedQueries: true
             },
             autoSchemaSync: true
     }).then(async connection => {

       console.log("GRVANDO USUARIO DEPOIS DE CONECTADO");

        let userApp = new UserApp();
        userApp.dsLogin = "123mudar";
        userApp.dsSenha = "123mudar";


         await connection.entityManager.persist(userApp);
         console.log("GRVANDO COM SUCESSO ------------------- USUARIO DEPOIS DE CONECTADO");

     }).catch(error => console.log(error));

  }
}
