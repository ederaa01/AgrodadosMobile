import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Pedido {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idPedido :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idRepresentada :string ;

    @Column({ nullable: true })
    idCondPagamento :string ;

    @Column({ nullable: true })
    idCliente :string ;

    @Column({ nullable: true })
    idTabelaPreco :string ;

    @Column({ nullable: true })
    idVisita :string ;

    @Column({ nullable: true })
    vlBruto :string ;

    @Column({ nullable: true })
    vlDesconto :string ;

    @Column({ nullable: true })
    vlLiquido :string ;

    @Column({ nullable: true })
    dataPedido :string ;

    @Column({ nullable: true })
    dataLiberacao :string ;

    @Column({ nullable: true })
    situacao :string ;

    @Column({ nullable: true })
    nmCliente :string ;

    @Column({ nullable: true })
    nmEndereco :string ;

    @Column({ nullable: true })
    endereco :string ;

    @Column({ nullable: true })
    bairro :string ;

    @Column({ nullable: true })
    numero :string ;

    @Column({ nullable: true })
    dsTalhao :string ;

    @Column({ nullable: true })
    idEndereco :string ;

    @Column({ nullable: true })
    idTalhao :string ;

    @Column({ nullable: true })
    dsCondPagamento :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    idWsVisita :string ;

    @Column({ nullable: true })
    idErpVisita :string ;

    @Column({ nullable: true })
    idWsCliente :string ;

    @Column({ nullable: true })
    idErpCliente :string ;

    @Column({ nullable: true })
    idWsCondPagto :string ;

    @Column({ nullable: true })
    idErpCondPagto :string ;

    @Column({ nullable: true })
    idWsRepresentada :string ;

    @Column({ nullable: true })
    idErpRepresentada :string ;

    @Column({ nullable: true })
    idWsTabelaPreco :string ;

    @Column({ nullable: true })
    idErpTabelaPreco :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;
  }
