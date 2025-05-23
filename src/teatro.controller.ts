/* eslint-disable no-empty-function */
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TeatroModel } from './admin/resources/teatro.resource.js';

@Controller('teatro')
export class TeatroController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel('Teatro') private readonly teatroModel: Model<typeof TeatroModel>,
  ) {}

  @Get()
  async getAllTeatros() {
    return this.teatroModel
      .find()
      .populate('media')
      .lean()
      .exec();
  }
}
