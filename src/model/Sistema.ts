import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Sistema {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    descricao :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
