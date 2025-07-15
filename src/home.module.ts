import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HomeController } from './home.controller..js';
import { HomeSchema } from './admin/entities/home.entity.js';
import { MediaSchema } from './admin/resources/media.resource.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Home', schema: HomeSchema },
      { name: 'Media', schema: MediaSchema }, // registra Media para popular
    ]),
  ],
  controllers: [HomeController],
})
export class HomeModule {}
