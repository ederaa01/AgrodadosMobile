import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class VeiculoEventos {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idEventos :string ;

    @Column({ nullable: true })
    idVeiculo :string ;

    @Column({ nullable: true })
    idCombustivel :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    tpEvento :string ;

    @Column({ nullable: true })
    km :string ;

    @Column({ nullable: true })
    idWsVeiculo :string ;

    @Column({ nullable: true })
    idWsCombustivel :string ;

    @Column({ nullable: true })
    idErpVeiculo :string ;

    @Column({ nullable: true })
    idErpCombustivel :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
