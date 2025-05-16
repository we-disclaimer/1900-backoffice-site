/* eslint-disable no-empty-function */
import { Controller, Get, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UnidadeModel } from './admin/resources/unidades.resource.js';

@Controller('unidades')
export class UnidadesController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel('Unidade') private readonly unidadeModel: Model<typeof UnidadeModel>,
  ) {}

  @Get()
  async getAllStores() {
    return this.unidadeModel
      .find()
      .populate('mediaCapa', 'url')
      .populate('mediaPrincipal', 'url')
      .populate('mediaSecundaria', 'url')
      .lean()
      .exec();
  }

  @Get(':urlCustomizada')
  async getByUrlCustomizada(@Param('urlCustomizada') urlCustomizada: string) {
    const unidade = await this.unidadeModel
      .findOne({ urlCustomizada }) // busca um só item
      .populate('mediaCapa', 'url')
      .populate('mediaPrincipal', 'url')
      .populate('mediaSecundaria', 'url')
      .lean()
      .exec();

    if (!unidade) {
      return { message: 'Unidade não encontrada' };
    }

    return unidade; // já será um objeto simples, sem array
  }
}
