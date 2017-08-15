import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class TabelaPreco {
    constructor(id, idTabelaPreco, idSistema, dsTabelaPreco, idWs, idErp, hasCode, hasCodeWs){
        this.id  = id;
        this.idTabelaPreco  = idTabelaPreco;
        this.idSistema  = idSistema;
        this.dsTabelaPreco  = dsTabelaPreco;
        this.idWs  = idWs;
        this.idErp  = idErp;
        this.hasCode  = hasCode;
        this.hasCodeWs  = hasCodeWs;
    }
}
