import { Table, PrimaryColumn, Column } from 'ionic-orm-2'


@Table()
export class Veiculo {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column({ nullable: true })
    idVeiculo :string ;

    @Column({ nullable: true })
    idFrota :string ;

    @Column({ nullable: true })
    idWs :string ;

    @Column({ nullable: true })
    idErp :string ;

    @Column({ nullable: true })
    dsVeiculo :string ;

    @Column({ nullable: true })
    placa :string ;

    @Column({ nullable: true })
    ano :string ;

    @Column({ nullable: true })
    hasCode :string ;

    @Column({ nullable: true })
    hasCodeWs :string ;

  }
