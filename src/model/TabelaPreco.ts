import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class TabelaPreco {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idTabelaPreco :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    dsTabelaPreco :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
