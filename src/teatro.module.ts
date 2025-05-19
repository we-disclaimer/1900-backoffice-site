import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MediaSchema } from './admin/resources/media.resource.js';
import { TeatroController } from './teatro.controller.js';
import { TeatroSchema } from './admin/resources/teatro.resource.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Teatro', schema: TeatroSchema },
      { name: 'Media', schema: MediaSchema }, // 👈 registra Media
    ]),
  ],
  controllers: [TeatroController],
})
export class TeatroModule {}
