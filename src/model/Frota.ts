import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Frota {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idFrota :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    dsFrota :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;


  }
