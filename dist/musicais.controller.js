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
let MusicaisController = class MusicaisController {
    constructor(musicaisModel) {
        this.musicaisModel = musicaisModel;
    }
    async getAllMusicais() {
        return this.musicaisModel
            .find()
            .populate('media')
            .lean()
            .exec();
    }
    async getMusicaisEmBreve() {
        return this.musicaisModel
            .find({ emBreve: true, finalizado: false })
            .populate('media')
            .lean()
            .exec();
    }
    async getMusicaisFinalizados() {
        return this.musicaisModel
            .find({ finalizado: true, emBreve: false })
            .populate('media')
            .lean()
            .exec();
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MusicaisController.prototype, "getAllMusicais", null);
__decorate([
    Get('embreve'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MusicaisController.prototype, "getMusicaisEmBreve", null);
__decorate([
    Get('finalizados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MusicaisController.prototype, "getMusicaisFinalizados", null);
MusicaisController = __decorate([
    Controller('musicais'),
    __param(0, InjectModel('Musicais')),
    __metadata("design:paramtypes", [Model])
], MusicaisController);
export { MusicaisController };
//# sourceMappingURL=musicais.controller.js.map