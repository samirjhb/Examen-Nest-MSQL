import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Tabla' })
export class Tabla {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Cliente: string;

  @Column({
    type: 'timestamp',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
  })
  createdAt: Date;
}
