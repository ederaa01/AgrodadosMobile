import { Table, PrimaryColumn, Column } from 'ionic-orm-2'

@Table()
export class Cliente {

  @PrimaryColumn("int", { generated: true })
  id: number;

  @Column({ nullable: true })
  idUser :string ;

  @Column({ nullable: true })
  idCliente :string ;

  @Column({ nullable: true })
  idSistema :string ;

  @Column({ nullable: true })
  nmCliente :string ;

  @Column({ nullable: true })
  cpfCnpj :string ;

  @Column({ nullable: true })
  email :string ;

  @Column({ nullable: true })
  telefone :string ;

  @Column({ nullable: true })
  observacao :string ;

  @Column({ nullable: true })
  situacao :string ;

  @Column({ nullable: true })
  idWs :string ;

  @Column({ nullable: true })
  idErp :string ;

  @Column({ nullable: true })
  hasCode :string ;

  @Column({ nullable: true })
  hasCodeWs :string ;

}
