/* eslint-disable no-empty-function */
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MusicaisModel } from './admin/resources/musicais.js';

@Controller('musicais')
export class MusicaisController {
  constructor(
    @InjectModel('Musicais') private readonly musicaisModel: Model<typeof MusicaisModel>,
  ) {}

  @Get()
  async getAllMusicais() {
    return this.musicaisModel
      .find()
      .populate('media')
      .lean()
      .exec();
  }

  @Get('embreve')
  async getMusicaisEmBreve() {
    return this.musicaisModel
      .find({ emBreve: true, finalizado: false })
      .populate('media')
      .lean()
      .exec();
  }

  @Get('finalizados')
  async getMusicaisFinalizados() {
    return this.musicaisModel
      .find({ finalizado: true, emBreve: false })
      .populate('media')
      .lean()
      .exec();
  }
}
