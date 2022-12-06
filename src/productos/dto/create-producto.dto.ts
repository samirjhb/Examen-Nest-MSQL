import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty()
  producto: string;

  @ApiProperty()
  precioProducto: number;
}
