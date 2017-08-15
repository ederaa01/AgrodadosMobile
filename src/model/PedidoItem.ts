import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class PedidoItem {
    constructor(id, idPedido, idSistema, idItem, idRepresentada, quantidade, vlUnitario, vlTotal, vlDesconto,
        idWsItem, idErpItem, idWsPedido, idErpPedido, idWsRepresentada, idErpRepresentada, hasCode, hasCodeWs){
          this.id  = id;
          this.idPedido = idPedido;
          this.idSistema  = idSistema;
          this.idItem  = idItem;
          this.idRepresentada  = idRepresentada;
          this.quantidade  = quantidade;
          this.vlUnitario  = vlUnitario;
          this.vlTotal = vlTotal;
          this.vlDesconto  = vlDesconto;
          this.idWsItem  = idWsItem;
          this.idErpItem  = idErpItem;
          this.idWsPedido  = idWsPedido;
          this.idErpPedido  = idErpPedido;
          this.idWsRepresentada  = idWsRepresentada;
          this.idErpRepresentada  = idErpRepresentada;
          this.hasCode  = hasCode;
          this.hasCodeWs = hasCodeWs;
    }
}
