import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty()
  Producto: string;

  @ApiProperty()
  precioProducto: number;
}
