import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Item {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idItem :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idVariedade :string ;

    @Column({ nullable: true })
    id2 :string ;

    @Column({ nullable: true })
    dsItem :string ;

    @Column({ nullable: true })
    isServico :string ;

    @Column({ nullable: true })
    sldEstoque :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;


  }
