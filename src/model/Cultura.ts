import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Cultura {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idVariedade :string ;

    @Column({ nullable: true })
    dsVariedade :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hashasCodeWsCode :string ;


  }
