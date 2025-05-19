/* eslint-disable no-empty-function */
import {
  Controller, Get, Param, NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CategoriaModel } from './admin/resources/subcategoria.resource.js';

@Controller('categoria')
export class CategoriaController {
  constructor(
    @InjectModel('Categoria') private readonly categoriaModel: Model<typeof CategoriaModel>,
  ) {}

  @Get()
  async getAllCategoria() {
    return this.categoriaModel.find().lean().exec();
  }

  @Get(':id')
  async getCategoriaById(@Param('id') id: string) {
    const categoria = await this.categoriaModel.findById(id).lean().exec();
    if (!categoria) {
      throw new NotFoundException(`Categoria com id ${id} não encontrada`);
    }
    return categoria;
  }
}
