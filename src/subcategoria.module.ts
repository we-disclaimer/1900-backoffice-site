import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategoriaSchema } from './admin/resources/subcategoria.resource.js';
import { CategoriaController } from './subcategoria.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Categoria', schema: CategoriaSchema },
    ]),
  ],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
