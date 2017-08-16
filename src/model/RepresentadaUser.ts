import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class RepresentadaUser {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idSistema :string ;

    @Column({ nullable: true })
    idRepresentada :string ;

    @Column({ nullable: true })
    idUsuario :string ;

    @Column({ nullable: true })
    inSituacao :string ;

    @Column({ nullable: true })
    idWsRepresentada :string ;

    @Column({ nullable: true })
    idErpRepresentada :string ;

    @Column({ nullable: true })
    idWsUser :string ;

    @Column({ nullable: true })
    idErpUser :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
