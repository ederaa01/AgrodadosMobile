import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class ClienteEndereco {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idEndereco :string ;

    @Column({ nullable: true })
    idCliente :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    nmEndereco :string ;

    @Column({ nullable: true })
    endereco :string ;

    @Column({ nullable: true })
    bairro :string ;

    @Column({ nullable: true })
    numero :string ;

    @Column({ nullable: true })
    ie :string ;

    @Column({ nullable: true })
    cep :string ;

    @Column({ nullable: true })
    situacao :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idWsCliente :string ;

    @Column({ nullable: true })
    idErpCliente :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

    

  }
