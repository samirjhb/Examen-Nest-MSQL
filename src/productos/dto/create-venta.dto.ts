import { ApiProperty } from '@nestjs/swagger';

export class CreateVentaDTO {
  @ApiProperty()
  Cliente: string;

  @ApiProperty()
  Producto: string;

  @ApiProperty()
  Compra: number;
}
