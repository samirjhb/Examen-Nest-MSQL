import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Ventas } from './entities/regitroVentas.entity';
import { Tabla } from './entities/tabla.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Ventas, Tabla])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
