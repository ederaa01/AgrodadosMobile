import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class VendedorCliente {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idCliente :string ;

    @Column({ nullable: true })
    idVendedor :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    inSituacao :string ;

    @Column({ nullable: true })
    idWsVendedor :string ;

    @Column({ nullable: true })
    idErpVendedor :string ;

    @Column({ nullable: true })
    idWsCliente :string ;

    @Column({ nullable: true })
    idErpCliente :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;
  }
