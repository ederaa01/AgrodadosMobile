import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class PedidoItem {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idPedido :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idItem :string ;

    @Column({ nullable: true })
    idRepresentada :string ;

    @Column({ nullable: true })
    quantidade :string ;

    @Column({ nullable: true })
    vlUnitario :string ;

    @Column({ nullable: true })
    vlTotal :string ;

    @Column({ nullable: true })
    vlDesconto :string ;

    @Column({ nullable: true })
    idWsItem :string ;

    @Column({ nullable: true })
    idErpItem :string ;

    @Column({ nullable: true })
    idWsPedido :string ;

    @Column({ nullable: true })
    idErpPedido :string ;

    @Column({ nullable: true })
    idWsRepresentada :string ;

    @Column({ nullable: true })
    idErpRepresentada :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
