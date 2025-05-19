import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MediaSchema } from './admin/resources/media.resource.js';
import { CardapioSchema } from './admin/resources/cardapio.resource.js';
import { CardapioController } from './cardapio.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cardapio', schema: CardapioSchema },
      { name: 'Media', schema: MediaSchema }, // 👈 registra Media
    ]),
  ],
  controllers: [CardapioController],
})
export class CardapioModule {}
