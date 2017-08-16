import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Representada {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idRepresentada :string ;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    nmRepresentada :string ;

    @Column({ nullable: true })
    nmRazaoSocila :string ;

    @Column({ nullable: true })
    cpfCnpj :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
