import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class Visita {
  
  @PrimaryColumn("int", { generated: true })
  id: number;

  @Column({ nullable: true })
  idUser :string ;

        this.idVisita  = idVisita;
        this.idSistema = idSistema;
        this.idRepresentada = idRepresentada;
        this.idVeiculo = idVeiculo;
        this.idCliente = idCliente;
        this.idEventos = idEventos;
        this.cdCliente = cdCliente;
        this.nmCliente = nmCliente;
        this.cdCultura = cdCultura;
        this.dsCultura = dsCultura;
        this.cdPropriedade = cdPropriedade;
        this.nmPropriedade = nmPropriedade;
        this.dataVisita = dataVisita;
        this.latitude = latitude;
        this.longitude  = longitude;
        this.idWs = idWs;
        this.idErp = idErp;
        this.idWsCliente = idWsCliente;
        this.idErpCliente = idErpCliente;
        this.idWsVeiculo  = idWsVeiculo;
        this.idErpVeiculo = idErpVeiculo;
        this.idWsEvento = idWsEvento;
        this.idErpEvento = idErpEvento;
        this.hasCode = hasCode ;
        ths.hasCodeWs = hasCodeWs;

}
