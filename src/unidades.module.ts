import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MediaSchema } from './admin/resources/media.resource.js';
import { UnidadesController } from './unidades.controller.js';
import { UnidadeSchema } from './admin/resources/unidades.resource.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Unidade', schema: UnidadeSchema },
      { name: 'Media', schema: MediaSchema }, // 👈 registra Media
    ]),
  ],
  controllers: [UnidadesController],
})
export class UnidadesModule {}
