import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class TabelaPrecoItem {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idTabelaPreco :string ;

    @Column({ nullable: true })
    idItem :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    valor :string ;

    @Column({ nullable: true })
    idWsItem :string ;

    @Column({ nullable: true })
    idErpItem :string ;

    @Column({ nullable: true })
    idWsTabelaPreco :string ;

    @Column({ nullable: true })
    idErpTabelaPreco :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
