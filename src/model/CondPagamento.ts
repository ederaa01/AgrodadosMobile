import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class CondPagamento {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idCondPagamento :string ;

    @Column({ nullable: true })
    idSistema : string ;

    @Column({ nullable: true })
    dsCondPagamento  : string ;

    @Column({ nullable: false })
    qtVezes : string;

    @Column({ nullable: false })
    carencia  : string;

    @Column({ nullable: true })
    intervalo  : string;

    @Column({ nullable: true })
    idWs : string;

    @Column({ nullable: true })
    idErp  : string;

    @Column({ nullable: true })
    hasCode  : string;

    @Column({ nullable: true })
    hasCodeWs : string;
}
