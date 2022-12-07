import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Ventas' })
export class Ventas {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Compra: string;
  @Column()
  Producto: string;
  @Column({
    type: 'timestamp',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
  })
  createdAt: Date;
}
