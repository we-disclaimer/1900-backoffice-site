import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MediaSchema } from './admin/resources/media.resource.js';
import { ProductsController } from './products.controller.js';
import { PostSchema } from './admin/resources/post.resource.js';
import { CategoriaSchema } from './admin/resources/subcategoria.resource.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Produtos', schema: PostSchema },
      { name: 'Media', schema: MediaSchema }, // 👈 registra Media
      { name: 'Categoria', schema: CategoriaSchema }, // 👈 registra Media
    ]),
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
