import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty()
  cliente: string;
  @ApiProperty()
  rut: string;
  @ApiProperty()
  cuenta: number;
  @ApiProperty()
  saldo: number;
  @ApiProperty()
  estado: boolean;
}
