import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ventas' })
export class Ventas {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Cliente: string;
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
