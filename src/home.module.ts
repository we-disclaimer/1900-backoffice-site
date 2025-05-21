import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HomeController } from './home.controller..js';
import { HomeSchema } from './admin/entities/home.entity.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Home', schema: HomeSchema },
    ]),
  ],
  controllers: [HomeController],
})
export class HomeModule {}
