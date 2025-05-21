var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeController } from './home.controller..js';
import { HomeSchema } from './admin/entities/home.entity.js';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    Module({
        imports: [
            MongooseModule.forFeature([
                { name: 'Home', schema: HomeSchema },
            ]),
        ],
        controllers: [HomeController],
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map