import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Combustivel {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idCombustivel :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    dsCombustivel :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
