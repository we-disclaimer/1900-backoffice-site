/* eslint-disable no-empty-function */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { NoticiasModel } from './admin/resources/noticias.resource.js';

@Controller('noticias')
export class NoticiasController {
  constructor(
    @InjectModel('Noticias') private readonly noticiasModel: Model<typeof NoticiasModel>,
  ) {}

  @Get()
  async getAllNoticias(@Query('categoria') categoria?: string) {
    const query = categoria ? { categorias: categoria } : {};
    return this.noticiasModel
      .find(query)
      .select('-conteudo')
      .populate('fotoDestaque')
      .populate('categorias')
      .sort({ dataPublicacao: -1 })
      .lean()
      .exec();
  }

  @Get('recentes')
  async getNoticiasRecentes() {
    return this.noticiasModel
      .find()
      .select('-conteudo')
      .populate('fotoDestaque')
      .populate('categorias')
      .sort({ dataPublicacao: -1 })
      .limit(2)
      .lean()
      .exec();
  }

  @Get('categorias')
  async getCategorias() {
    return this.noticiasModel
      .aggregate([
        { $unwind: '$categorias' },
        { $lookup: { from: 'categorianoticias', localField: 'categorias', foreignField: '_id', as: 'categoria' } },
        { $unwind: '$categoria' },
        { $group: { _id: '$categoria._id', nome: { $first: '$categoria.nome' }, count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ])
      .exec();
  }

  @Get(':id')
  async getNoticiaById(@Param('id') id: string) {
    return this.noticiasModel
      .findById(id)
      .populate('fotoDestaque')
      .populate('categorias')
      .lean()
      .exec();
  }

  @Get('slug/:slug')
  async getNoticiaBySlug(@Param('slug') slug: string) {
    return this.noticiasModel
      .findOne({ slugPermanente: slug })
      .populate('fotoDestaque')
      .populate('categorias')
      .lean()
      .exec();
  }
}
