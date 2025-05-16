var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from './admin/resources/media.resource.js';
import { ProductsController } from './products.controller.js';
import { PostSchema } from './admin/resources/post.resource.js';
import { CategoriaSchema } from './admin/resources/subcategoria.resource.js';
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    Module({
        imports: [
            MongooseModule.forFeature([
                { name: 'Produtos', schema: PostSchema },
                { name: 'Media', schema: MediaSchema },
                { name: 'Categoria', schema: CategoriaSchema },
            ]),
        ],
        controllers: [ProductsController],
    })
], ProductsModule);
export { ProductsModule };
//# sourceMappingURL=products.module.js.map