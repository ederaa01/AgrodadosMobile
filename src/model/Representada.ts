import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class Cultura {
    constructor(id, idRepresentada, idSistema, idWs, idErp, nmRepresentada, nmRazaoSocila, cpfCnpj, hasCode, hasCodeWs){
        this.id = id;
        this.idRepresentada = idRepresentada;
        this.idSistema  = idSistema;
        this.idWs  = idWs;
        this.idErp  = idErp;
        this.nmRepresentada = nmRepresentada;
        this.nmRazaoSocila = nmRazaoSocila;
        this.cpfCnpj = cpfCnpj;
        this.hasCode  = hasCode;
        this.hasCodeWs  = hasCodeWs;
    }
}
