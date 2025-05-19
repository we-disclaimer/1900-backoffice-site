import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MediaSchema } from './admin/resources/media.resource.js';
import { MusicaisSchema } from './admin/resources/musicais.js';
import { MusicaisController } from './musicais.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Musicais', schema: MusicaisSchema },
      { name: 'Media', schema: MediaSchema }, // 👈 registra Media
    ]),
  ],
  controllers: [MusicaisController],
})
export class MusicaisModule {}
