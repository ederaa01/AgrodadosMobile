import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class TabelaPrecoItem {
    constructor(id, idTabelaPreco, idItem, idSistema, valor, idWsItem, idErpItem, idWsTabelaPreco, idErpTabelaPreco, hasCode, hasCodeWs){
        this.id = id;
        this.idTabelaPreco  = idTabelaPreco;
        this.idItem  = idItem;
        this.idSistema  = idSistema;
        this.valor = valor;
        this.idWsItem = idWsItem;
        this.idErpItem  = idErpItem;
        this.idWsTabelaPreco  = idWsTabelaPreco;
        this.idErpTabelaPreco  = idErpTabelaPreco;
        this.hasCode  = hasCode;
        this.hasCodeWs  = hasCodeWs;
    }
}
