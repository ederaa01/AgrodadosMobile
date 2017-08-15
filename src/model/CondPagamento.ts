import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class CondPagamento {
    constructor(id, idCondPagamento, idSistema, dsCondPagamento, qtVezes, carencia, intervalo, idWs, idErp, hasCode, hasCodeWs){
      this.id = id;
      this.idCondPagamento = idCondPagamento;
      this.idSistema = idSistema;
      this.dsCondPagamento = dsCondPagamento;
      this.qtVezes = qtVezes;
      this.carencia = carencia;
      this.intervalo  = intervalo;
      this.idWs = idWs;
      this.idErp  = idErp;
      this.hasCode  = hasCode;
      this.hasCodeWs = hasCodeWs;
    }
}
