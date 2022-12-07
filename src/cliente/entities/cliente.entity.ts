import { Ventas } from 'src/productos/entities/regitroVentas.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Cliente' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Cliente: string;

  @Column({ unique: true })
  rut: string;

  @Column({ unique: true })
  cuenta: number;

  @Column()
  saldo: number;

  @Column()
  estado: boolean;

  @Column({
    type: 'timestamp',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
  })
  createdAt: Date;

  @ManyToOne(() => Ventas, (ventas) => ventas.RegistroVentas)
  compra: Ventas;
}
