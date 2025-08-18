import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MediaSchema } from './admin/resources/media.resource.js';
import { NoticiasSchema } from './admin/resources/noticias.resource.js';
import { CategoriaNoticiasSchema } from './admin/resources/categoria-noticias.resource.js';
import { NoticiasController } from './noticias.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Noticias', schema: NoticiasSchema },
      { name: 'CategoriaNoticias', schema: CategoriaNoticiasSchema },
      { name: 'Media', schema: MediaSchema }, // 👈 registra Media para referência
    ]),
  ],
  controllers: [NoticiasController],
})
export class NoticiasModule {}
