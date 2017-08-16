import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Configuracao {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idConfig :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    InWiFi :string ;

    @Column({ nullable: true })
    InSincAutomatico :string ;

    @Column({ nullable: true })
    urlServidor :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

    @Column({ nullable: true })
    hasCode :string ;

  }
