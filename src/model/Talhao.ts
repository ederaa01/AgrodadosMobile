import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Talhao {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idTalhao :string ;

    @Column({ nullable: true })
    idCliente :string ;

    @Column({ nullable: true })
    idEndereco :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    dsTalhao :string ;

    @Column({ nullable: true })
    idErpCliente :string ;

    @Column({ nullable: true })
    idWsCliente :string ;

    @Column({ nullable: true })
    idWsEndereco :string ;

    @Column({ nullable: true })
    idErpEndereco :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
