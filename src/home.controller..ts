/* eslint-disable no-empty-function */
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { HomeModel } from './admin/entities/home.entity.js';

@Controller('home')
export class HomeController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel('Home') private readonly homeModel: Model<typeof HomeModel>,
  ) {}

  @Get()
  async getAllTeatros() {
    return this.homeModel
      .find()
      .populate('media', 'url')
      .populate('banner', 'url')
      .lean()
      .exec();
  }
}
