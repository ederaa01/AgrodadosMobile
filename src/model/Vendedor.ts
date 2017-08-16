import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Vendedor {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idVendedor :string ;

    @Column({ nullable: true })
    nmVendedor :string ;

    @Column({ nullable: true })
    cpfCnpj :string ;

    @Column({ nullable: true })
    rg :string ;

    @Column({ nullable: true })
    ie :string ;

    @Column({ nullable: true })
    dsEmail :string ;

    @Column({ nullable: true })
    dtCadastro :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
