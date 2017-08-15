import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class VeiculoEventos {
    constructor(id, idEventos, idVeiculo, idCombustivel, idWs, idErp, tpEvento, km, idWsVeiculo, idWsCombustivel,
      idErpVeiculo, idErpCombustivel, hasCode, hasCodeWs){
        this.id = id;
        this.idEventos = idEventos;
        this.idVeiculo = idVeiculo;
        this.idCombustivel  = idCombustivel;
        this.idWs  = idWs;
        this.idErp  = idErp;
        this.tpEvento  = tpEvento;
        this.km  = km;
        this.idWsVeiculo = idWsVeiculo;
        this.idWsCombustivel = idWsCombustivel;
        this.idErpVeiculo  = idErpVeiculo;
        this.idErpCombustivel = idErpCombustivel
        this.hasCode  = hasCode;
        this.hasCodeWs = hasCodeWs;
    }
}
