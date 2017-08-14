import {Table, Column, PrimaryColumn} from "ionic-orm";


@Table()
export class UserApp {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    idUser :string ;

    @Column()
    idSistema : string ;

    @Column()
    idVendedor  : string ;

    @Column()
    dsLogin : string;

    @Column()
    dsSenha  : string;

    @Column()
    tpUsuario  : string;

    @Column()
    idWs : string;

    @Column()
    idErp  : string;

    @Column()
    idWsVendedor  : string;

    @Column()
    idErpVendedor : string;

    @Column()
    hasCode  : string;

    @Column()
    hasCodeWs : string;
}
