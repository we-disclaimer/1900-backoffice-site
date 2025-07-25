var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
let HomeController = class HomeController {
    constructor(homeModel) {
        this.homeModel = homeModel;
    }
    async getAllTeatros() {
        return this.homeModel
            .find()
            .populate('media', 'url')
            .populate('banner', 'url')
            .lean()
            .exec();
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getAllTeatros", null);
HomeController = __decorate([
    Controller('home'),
    __param(0, InjectModel('Home')),
    __metadata("design:paramtypes", [Model])
], HomeController);
export { HomeController };
//# sourceMappingURL=home.controller..js.map