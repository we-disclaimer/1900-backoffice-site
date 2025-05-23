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
import { Controller, Get, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
let UnidadesController = class UnidadesController {
    constructor(unidadeModel) {
        this.unidadeModel = unidadeModel;
    }
    async getAllStores() {
        return this.unidadeModel
            .find()
            .populate('mediaCapa', 'url')
            .populate('mediaPrincipal', 'url')
            .populate('mediaSecundaria', 'url')
            .lean()
            .exec();
    }
    async getByUrlCustomizada(urlCustomizada) {
        const unidade = await this.unidadeModel
            .findOne({ urlCustomizada })
            .populate('mediaCapa', 'url')
            .populate('mediaPrincipal', 'url')
            .populate('mediaSecundaria', 'url')
            .lean()
            .exec();
        if (!unidade) {
            return { message: 'Unidade não encontrada' };
        }
        return unidade;
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "getAllStores", null);
__decorate([
    Get(':urlCustomizada'),
    __param(0, Param('urlCustomizada')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "getByUrlCustomizada", null);
UnidadesController = __decorate([
    Controller('unidades'),
    __param(0, InjectModel('Unidade')),
    __metadata("design:paramtypes", [Model])
], UnidadesController);
export { UnidadesController };
//# sourceMappingURL=unidades.controller.js.map