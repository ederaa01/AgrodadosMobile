import { Injectable} from '@angular/core';
import { createConnection, Connection } from 'ionic-orm-2';
import { UserApp } from "../model/UserApp";
import { Cliente } from '../model/Cliente';
import { CondPagamento } from '../model/CondPagamento';
import { Visita } from '../model/Visita';
import { VendedorCliente } from '../model/VendedorCliente';
import { Vendedor } from '../model/Vendedor';
import { VeiculoEventos } from '../model/VeiculoEventos';
import { Veiculo } from '../model/Veiculo'
import { Talhao } from '../model/Talhao'
import { TabelaPrecoItem } from '../model/TabelaPrecoItem';
import { TabelaPreco } from '../model/TabelaPreco';
import { SistemaModulo } from '../model/SistemaModulo';
import { Sistema } from '../model/Sistema';
import { RepresentadaUser } from '../model/RepresentadaUser';
import { Representada } from '../model/Representada';
import { PedidoItem } from '../model/PedidoItem';
import { Pedido } from '../model/Pedido';
import { Modulo } from '../model/Modulo';
import { Item } from '../model/Item';
import { Frota } from '../model/Frota';
import { Cultura } from '../model/Cultura';
import { Configuracao } from '../model/Configuracao';
import { CombustivelVeiculo } from '../model/CombustivelVeiculo';
import { Combustivel } from '../model/Combustivel';
import { ClienteEndereco } from '../model/ClienteEndereco';




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
        CondPagamento,
        Visita,
        VendedorCliente,
        Vendedor,
        VeiculoEventos,
        Veiculo,
        Talhao,
        TabelaPrecoItem,
        TabelaPreco,
        SistemaModulo,
        Sistema,
        RepresentadaUser,
        Representada,
        PedidoItem,
        Pedido,
        Modulo,
        Item,
        Frota,
        Cultura,
        Configuracao,
        CombustivelVeiculo,
        Combustivel,
        ClienteEndereco
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
