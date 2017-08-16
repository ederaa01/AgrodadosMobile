import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Modulo {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idModulo :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    dsModulo :string ;

    @Column({ nullable: true })
    tpModulo :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
