import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class UserApp {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idUser :string ;

    @Column({ nullable: true })
    idSistema : string ;

    @Column({ nullable: true })
    idVendedor  : string ;

    @Column({ nullable: false })
    dsLogin : string;

    @Column({ nullable: false })
    dsSenha  : string;

    @Column({ nullable: true })
    tpUsuario  : string;

    @Column({ nullable: true })
    idWs : string;

    @Column({ nullable: true })
    idErp  : string;

    @Column({ nullable: true })
    idWsVendedor  : string;

    @Column({ nullable: true })
    idErpVendedor : string;

    @Column({ nullable: true })
    hasCode  : string;

    @Column({ nullable: true })
    hasCodeWs : string;
}
