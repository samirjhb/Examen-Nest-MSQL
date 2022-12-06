import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Producto' })
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Producto: string;

  @Column()
  precioProducto: number;

  @Column({
    type: 'timestamp',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
  })
  createdAt: Date;
}
