import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Ventas' })
export class Ventas {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Compra: string;
  @Column()
  Producto: string;
  @OneToMany(() => Cliente, (cliente) => cliente.compra)
  RegistroVentas: Cliente[];
  @Column({
    type: 'timestamp',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
  })
  createdAt: Date;
}
