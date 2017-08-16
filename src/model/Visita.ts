import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Visita {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idVisita :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idRepresentada :string ;

    @Column({ nullable: true })
    idVeiculo :string ;

    @Column({ nullable: true })
    idCliente :string ;

    @Column({ nullable: true })
    idEventos :string ;

    @Column({ nullable: true })
    cdCliente :string ;

    @Column({ nullable: true })
    nmCliente :string ;

    @Column({ nullable: true })
    cdCultura :string ;

    @Column({ nullable: true })
    dsCultura :string ;

    @Column({ nullable: true })
    cdPropriedade :string ;

    @Column({ nullable: true })
    nmPropriedade :string ;

    @Column({ nullable: true })
    dataVisita :string ;

    @Column({ nullable: true })
    latitude :string ;

    @Column({ nullable: true })
    longitude :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    idWsCliente :string ;

    @Column({ nullable: true })
    idErpCliente :string ;

    @Column({ nullable: true })
    idWsVeiculo :string ;

    @Column({ nullable: true })
    idErpVeiculo :string ;

    @Column({ nullable: true })
    idWsEvento :string ;

    @Column({ nullable: true })
    idErpEvento :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;
}
