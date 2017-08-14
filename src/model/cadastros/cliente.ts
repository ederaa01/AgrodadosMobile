import {Table, Column, PrimaryColumn} from "ionic-orm";


@Table()
export class Cliente {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    idErp :string ;

    @Column()
    nmCliente : string ;

    @Column()
    cpfCnpj  : string ;

    @Column()
    email : string;

    @Column()
    telefone  : string;

    @Column()
    observacao  : string;

    @Column()
    situacao : string;

    @Column()
    idWs  : string;

    @Column()
    idSistema  : string;
}
