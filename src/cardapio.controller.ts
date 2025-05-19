/* eslint-disable no-empty-function */
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CardapioModel } from './admin/resources/cardapio.resource.js';

@Controller('cardapio')
export class CardapioController {
  constructor(
    @InjectModel('Cardapio') private readonly cardapioModel: Model<typeof CardapioModel>,
  ) {}

  @Get()
  async getAllCardapio() {
    return this.cardapioModel
      .find()
      .lean()
      .exec();
  }
}
