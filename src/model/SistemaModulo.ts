import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class SistemaModulo {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idModulo :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    dataVencimento :string ;

    @Column({ nullable: true })
    inSituacao :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;


  }
