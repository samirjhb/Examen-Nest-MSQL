/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private ProductoRepository: Repository<Producto>,
  ) {}

  //Creacion producto
  async create(createProductoDto: CreateProductoDto) {
    const NewProducto = await this.ProductoRepository.create(createProductoDto);
    return this.ProductoRepository.save(NewProducto);
  }

  //conuslta de todo los Producto
  async findAll() {
    return this.ProductoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
