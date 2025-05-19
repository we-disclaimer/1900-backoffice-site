var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from './admin/resources/media.resource.js';
import { CardapioSchema } from './admin/resources/cardapio.resource.js';
import { CardapioController } from './Cardapio.controller.js';
let CardapioModule = class CardapioModule {
};
CardapioModule = __decorate([
    Module({
        imports: [
            MongooseModule.forFeature([
                { name: 'Cardapio', schema: CardapioSchema },
                { name: 'Media', schema: MediaSchema },
            ]),
        ],
        controllers: [CardapioController],
    })
], CardapioModule);
export { CardapioModule };
//# sourceMappingURL=cardapio.module.js.map