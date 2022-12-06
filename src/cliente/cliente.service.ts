/* eslint-disable @typescript-eslint/no-empty-function */
import { CreateVentaDTO } from './../productos/dto/create-venta.dto';
import { Cliente } from './entities/cliente.entity';
import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ventas } from 'src/productos/entities/regitroVentas.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
    @InjectRepository(Ventas) private VentasRepository: Repository<Ventas>,
    @InjectRepository(Producto)
    private ProductoRepository: Repository<Producto>,
  ) {}

  //creacion de cliente
  async create(createClienteDto: CreateClienteDto) {
    const NewCliente = await this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(NewCliente);
  }

  //conuslta de todo los cliente
  async findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }

  //Funcion para realizar  venta
  async venta(createVentaDTO: CreateVentaDTO) {
    const DataCliente = await this.clienteRepository.findOne({
      where: {
        Cliente: createVentaDTO.Cliente,
      },
    });

    const DataProducto = await this.ProductoRepository.findOne({
      where: {
        Producto: createVentaDTO.Producto,
      },
    });
    console.log('Data Cliente', DataCliente, 'Data Producto', DataProducto);
  }
}
