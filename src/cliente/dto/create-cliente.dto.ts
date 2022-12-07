import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty()
  Cliente: string;
  @ApiProperty()
  rut: string;
  @ApiProperty()
  cuenta: number;
  @ApiProperty()
  saldo: number;
  @ApiProperty()
  estado: boolean;
}
