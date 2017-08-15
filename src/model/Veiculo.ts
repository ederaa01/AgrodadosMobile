import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class Veiculo {
    constructor(id, idVeiculo, idFrota, idWs, idErp, dsVeiculo, placa, ano, hasCode, hasCodeWs){
        this.id  = id;
        this.idVeiculo = idVeiculo;
        this.idFrota  = idFrota;
        this.idWs  = idWs;
        this.idErp  = idErp;
        this.dsVeiculo  = dsVeiculo;
        this.placa  = placa;
        this.ano  = ano;
        this.hasCode  = hasCode;
        this.hasCodeWs  = hasCodeWs;
    }
}
