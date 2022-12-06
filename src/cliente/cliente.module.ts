import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Ventas } from 'src/productos/entities/regitroVentas.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Ventas, Producto])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
