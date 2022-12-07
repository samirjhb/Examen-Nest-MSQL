import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { ClienteModule } from './cliente/cliente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/entities/cliente.entity';
import { Producto } from './productos/entities/producto.entity';
import { Ventas } from './productos/entities/regitroVentas.entity';
import { Tabla } from './productos/entities/tabla.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3312,
      username: 'samir',
      password: 'secret',
      database: 'Db',
      entities: [Cliente, Producto, Ventas, Tabla],
      synchronize: true,
    }),
    ProductosModule,
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
