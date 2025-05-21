/* eslint-disable max-len */
/* eslint-disable no-empty-function */
import {
  Controller,
  Get,
  Param,
  NotFoundException,
  BadRequestException,
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

  @Get('by-ids/:ids')
  async getCategoriasByIds(@Param('ids') ids: string) {
    const idArray = ids
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);

    if (idArray.length === 0) {
      throw new BadRequestException('Nenhum ID válido fornecido.');
    }

    const categorias = await this.categoriaModel
      .find({ _id: { $in: idArray } })
      .lean()
      .exec();

    if (!categorias || categorias.length === 0) {
      throw new NotFoundException('Nenhuma categoria encontrada para os IDs fornecidos.');
    }

    // Reordena os resultados de acordo com a ordem dos IDs recebidos
    const categoriasOrdenadas = idArray.map((id) => categorias.find((cat) => cat._id.toString() === id)).filter(Boolean); // Filtra os que não foram encontrados, por segurança

    return categoriasOrdenadas;
  }
}
