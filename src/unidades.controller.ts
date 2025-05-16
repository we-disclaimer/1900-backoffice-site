/* eslint-disable no-empty-function */
import { Controller, Get } from '@nestjs/common';
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
}
