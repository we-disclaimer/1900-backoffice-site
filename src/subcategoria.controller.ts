/* eslint-disable no-empty-function */
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CategoriaModel } from './admin/resources/subcategoria.resource.js';

@Controller('categoria')
export class CategoriaController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel('Categoria') private readonly categoriaModel: Model<typeof CategoriaModel>,
  ) {}

  @Get()
  async getAllCategoria() {
    return this.categoriaModel
      .find()
      .lean()
      .exec();
  }
}
